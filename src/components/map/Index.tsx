import { addProtocol, Feature, Map as MaplibreMap, MapOptions } from 'maplibre-gl';
import { useEffect, useMemo, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import FieldWrapper from '../common/FieldWrapper';
// @ts-ignore
import MapboxDraw from '@mapbox/mapbox-gl-draw';

import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import turfBbox from '@turf/bbox';
import { AllGeoJSON } from '@turf/helpers';
import 'maplibre-gl/dist/maplibre-gl.css';
import { Protocol } from 'pmtiles';
import {
  addMapControls,
  BASEMAP_URL,
  convertGeojsonToProjection,
  DrawOptions,
  enableDraw,
  getMapStyles,
  LKS_PROJECTION,
  MapControls,
  MAP_PROJECTION,
  parseDrawOptions,
  setPreviewLayerValue,
  setupPreviewLayer,
  transformBufferedItems,
} from './functions';
import { MapLayers } from './layers';
import { LayerToggleControl } from './LayerToggleControl';

MapboxDraw.constants.classes.CONTROL_BASE = 'maplibregl-ctrl';
MapboxDraw.constants.classes.CONTROL_PREFIX = 'maplibregl-ctrl-';
MapboxDraw.constants.classes.CONTROL_GROUP = 'maplibregl-ctrl-group';

export interface MapToggleLayerConfig {
  id: string;
  name: string;
  visible: boolean;
}

export interface MapProps {
  onLoad?: (map: MaplibreMap) => void;
  onChange?: (featureCollection: AllGeoJSON) => void;
  value?: AllGeoJSON;
  label?: string;
  error?: string;
  projection?: string;
  controls?: MapControls;
  preview?: boolean;
  draw?: boolean | DrawOptions;
  basemapUrl?: string;
  layers?: string[];
  zoomOnChange?: boolean;
  toggleLayers?: MapToggleLayerConfig[];
  setToggleLayers?: (layers: MapToggleLayerConfig[]) => void;
  bbox?: [number, number, number, number];
}

const Map = ({
  label,
  onLoad,
  error,
  draw,
  onChange,
  value,
  preview,
  controls,
  basemapUrl,
  projection = LKS_PROJECTION,
  layers,
  toggleLayers = [],
  setToggleLayers,
  zoomOnChange = true,
  bbox,
}: MapProps) => {
  const mapContainer = useRef(null as HTMLDivElement | null);
  const map = useRef(null as MaplibreMap | null);
  const mapDraw = useRef(null as MapboxDraw | null);

  const theme = useTheme();
  const styles = getMapStyles(theme.colors.map);
  const fitBoundsOptions = { padding: 50, maxZoom: 16 };

  const value4326: AllGeoJSON | undefined = useMemo(() => {
    if (value) {
      return transformBufferedItems(convertGeojsonToProjection(value, projection, MAP_PROJECTION));
    }
  }, [value, projection]);

  const drawOptions = useMemo(() => parseDrawOptions(draw), [draw]);

  const protocol = new Protocol();
  addProtocol('pmtiles', protocol.tile);

  const mapOptions: Partial<MapOptions> = {
    attributionControl: false,
    style: basemapUrl || BASEMAP_URL.LIGHT,
  };

  mapOptions.fitBoundsOptions = fitBoundsOptions;

  if (value4326) mapOptions.bounds = turfBbox(value4326) as any;

  if (bbox) mapOptions.bounds = bbox;

  useEffect(() => {
    if (!map.current || !value4326) return;

    setPreviewLayerValue(map.current, value4326, styles);

    if (zoomOnChange) {
      map.current.fitBounds(turfBbox(value4326) as any, fitBoundsOptions);
    }
  }, [value4326, zoomOnChange]);

  function addDrawEvents() {
    if (!map.current) return;

    function onDrawChange() {
      if (!mapDraw.current) return;

      let featureCollection = mapDraw.current.getAll();

      if (projection && featureCollection) {
        featureCollection = convertGeojsonToProjection(
          featureCollection,
          MAP_PROJECTION,
          projection,
        );
      }

      onChange?.(transformBufferedItems(featureCollection, false));
    }

    map.current.on('draw.create', onDrawChange);
    map.current.on('draw.update', onDrawChange);
    map.current.on('draw.delete', onDrawChange);

    if (!(drawOptions as DrawOptions)?.multi) {
      map.current.on('draw.render', () => {
        const { features } = mapDraw.current.getAll();
        // TODO: filter out by coordinates (when at least one point is drawn)
        if (features?.length < 2) return;

        const featureIds = features
          .slice(0, features.length - 1)
          .map((f: Feature) => f.id)
          .filter((i: string) => !!i);

        mapDraw.current.delete(featureIds);
      });
    }
  }

  function addDefaultLayers() {
    if (!map.current || !layers?.length) return;

    const mapLayers = MapLayers(theme.colors.map);

    map.current.on('load', () => {
      layers.forEach((layerType) => {
        map.current?.addSource(layerType, mapLayers[layerType].source);

        mapLayers[layerType].layers.forEach((layer) => {
          map.current?.addLayer(layer);
        });
      });
    });
  }

  useEffect(() => {
    // stops map from intializing more than once (or container not exists)
    if (map.current || !mapContainer?.current) return;

    mapOptions.container = mapContainer.current;
    map.current = new MaplibreMap(mapOptions as MapOptions);

    addMapControls(map.current, controls);
    addDefaultLayers();

    if (drawOptions && !preview) {
      mapDraw.current = enableDraw(map.current, drawOptions, value4326, styles);
      addDrawEvents();
    } else if (value4326) {
      setupPreviewLayer(map.current, value4326, styles);
    }

    onLoad?.(map.current);
  }, [mapContainer, onLoad]);

  useEffect(() => {
    if (!map.current || !toggleLayers) return;
    toggleLayers.forEach(layer => {
      ['-outline', '-name'].forEach(suffix => {
        const layerId = `${layer.id}${suffix}`;
        if (map.current!.getLayer(layerId)) {
          map.current!.setLayoutProperty(
            layerId,
            'visibility',
            layer.visible ? 'visible' : 'none'
          );
        }
      });
    });
  }, [toggleLayers]);

  return (
    <FieldWrapper label={label} error={error}>
      <MapDiv
        aria-label={`Interactive map ${label}`}
        aria-describedby={error ? `${label}-error` : undefined}
        tabIndex={0}
        ref={mapContainer}
        $error={!!error}>
      {toggleLayers && toggleLayers.length > 0 && setToggleLayers && (
        <LayerToggleControl
          toggleLayers={toggleLayers}
          setToggleLayers={setToggleLayers}
          mapContainerRef={mapContainer}
        />
      )}
      </MapDiv>
    </FieldWrapper>
  );
};

export default Map;

const MapDiv = styled.div<{ $error: boolean }>`
  height: 400px;
  width: 100%;
  border: 1px solid ${({ $error, theme }) => ($error ? theme.colors.danger : theme.colors.border)};
  border-radius: 4px;
  margin-top: 8px;
`;
