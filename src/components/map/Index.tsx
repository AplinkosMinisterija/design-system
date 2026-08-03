import { addProtocol, Map as MaplibreMap, MapOptions } from 'maplibre-gl';
import { useCallback, useEffect, useMemo, useRef } from 'react';
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

if (MapboxDraw.constants?.classes) {
  (MapboxDraw.constants.classes as any).CONTROL_BASE = 'maplibregl-ctrl';
  (MapboxDraw.constants.classes as any).CONTROL_PREFIX = 'maplibregl-ctrl-';
  (MapboxDraw.constants.classes as any).CONTROL_GROUP = 'maplibregl-ctrl-group';
}

export interface MapToggleLayerConfig {
  ids: string[];
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
  onLayerToggle?: (layer: MapToggleLayerConfig, visible: boolean) => void;
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
  onLayerToggle,
  zoomOnChange = true,
  bbox,
}: MapProps) => {
  const mapContainer = useRef<HTMLDivElement | null>(null);
  const map = useRef<MaplibreMap>(null!);
  const mapDraw = useRef<MapboxDraw>(null!);

  const theme = useTheme();
  const styles = getMapStyles(theme.colors.map);
  const fitBoundsOptions = useMemo(() => ({ padding: 50, maxZoom: 16 }), []);

  const value4326: AllGeoJSON | undefined = useMemo(() => {
    if (value) {
      return transformBufferedItems(convertGeojsonToProjection(value, projection, MAP_PROJECTION));
    }
  }, [value, projection]);

  const drawOptions = useMemo(() => parseDrawOptions(draw), [draw]);

  const protocol = new Protocol();
  addProtocol('pmtiles', protocol.tile);

  const mapOptions: Partial<MapOptions> = useMemo(() => {
    const options: Partial<MapOptions> = {
      attributionControl: false,
      style: basemapUrl || BASEMAP_URL.LIGHT,
      fitBoundsOptions,
    };

    if (value4326) options.bounds = turfBbox(value4326) as any;
    if (bbox) options.bounds = bbox;

    return options;
  }, [basemapUrl, fitBoundsOptions, value4326, bbox]);

  useEffect(() => {
    if (!map.current || !value4326) return;

    setPreviewLayerValue(map.current, value4326, styles);

    if (zoomOnChange) {
      map.current.fitBounds(turfBbox(value4326) as any, fitBoundsOptions);
    }
  }, [value4326, zoomOnChange, styles, fitBoundsOptions]);

  const addDrawEvents = useCallback(() => {
    if (!map.current) return;

    function onDrawChange() {
      if (!mapDraw.current) return;

      let featureCollection: any = mapDraw.current.getAll();

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
        if (features?.length < 2) return;

        const featureIds = features
          .slice(0, features.length - 1)
          .map((f: any) => f.id)
          .filter((i: any) => !!i);

        mapDraw.current.delete(featureIds);
      });
    }
  }, [projection, drawOptions, onChange]);

  const addDefaultLayers = useCallback(() => {
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
  }, [layers, theme.colors.map]);

  useEffect(() => {
    // stops map from intializing more than once (or container not exists)
    if (map.current || !mapContainer?.current) return;

    const options = { ...mapOptions, container: mapContainer.current };
    map.current = new MaplibreMap(options as MapOptions);

    addMapControls(map.current, controls);
    addDefaultLayers();

    if (drawOptions && !preview) {
      const draw = enableDraw(map.current, drawOptions, value4326, styles);
      if (draw) {
        mapDraw.current = draw;
        addDrawEvents();
      }
    } else if (value4326) {
      setupPreviewLayer(map.current, value4326, styles);
    }

    onLoad?.(map.current);
  }, [mapContainer, onLoad, addDefaultLayers, drawOptions, preview, value4326, styles, addDrawEvents, controls, mapOptions]);

  useEffect(() => {
    if (!map.current || !toggleLayers) return;
    toggleLayers.forEach(layer => {
      layer.ids.forEach(layerId => {
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

  const handleLayerToggle = (layer: MapToggleLayerConfig) => {
    onLayerToggle?.(layer, !layer.visible);
  };

  return (
    <FieldWrapper label={label} error={error}>
      <MapDiv
        aria-label={`Interactive map ${label}`}
        aria-describedby={error ? `${label}-error` : undefined}
        tabIndex={0}
        ref={mapContainer}
        $error={!!error}>
      {toggleLayers && toggleLayers.length > 0 && (
        <LayerToggleControl
          toggleLayers={toggleLayers}
          onLayerToggle={handleLayerToggle}
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
