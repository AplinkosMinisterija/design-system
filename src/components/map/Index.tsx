import { useEffect, useRef } from 'react';
import styled, { useTheme } from 'styled-components';
import FieldWrapper from '../common/FieldWrapper';
import { Feature, LngLatBounds, MapOptions, Map as MaplibreMap } from 'maplibre-gl';

// @ts-ignore
import MapboxDraw from '@mapbox/mapbox-gl-draw';

import 'maplibre-gl/dist/maplibre-gl.css';
import '@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css';
import bbox from '@turf/bbox';
import { AllGeoJSON } from '@turf/helpers';
import {
  BASEMAP_URL,
  DrawOptions,
  MAP_PROJECTION,
  MapControls,
  addMapControls,
  convertGeojsonToProjection,
  enableDraw,
  getMapStyles,
  parseDrawOptions,
  setupPreviewLayer,
  transformBufferedItems,
} from './functions';

MapboxDraw.constants.classes.CONTROL_BASE = 'maplibregl-ctrl';
MapboxDraw.constants.classes.CONTROL_PREFIX = 'maplibregl-ctrl-';
MapboxDraw.constants.classes.CONTROL_GROUP = 'maplibregl-ctrl-group';

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
}

const Map = ({
  label,
  onLoad,
  error,
  draw,
  onChange,
  projection,
  value,
  preview,
  controls,
  basemapUrl,
}: MapProps) => {
  const mapContainer = useRef(null as HTMLDivElement | null);
  const map = useRef(null as MaplibreMap | null);
  const mapDraw = useRef(null as MapboxDraw | null);
  const value4326 = useRef(undefined as AllGeoJSON | undefined);
  const theme = useTheme();

  projection = projection || '3346';
  draw = parseDrawOptions(draw);

  const mapOptions: Partial<MapOptions> = {
    attributionControl: false,
    style: basemapUrl || BASEMAP_URL.LIGHT,
  };

  if (value) {
    value4326.current = transformBufferedItems(
      convertGeojsonToProjection(value, projection, MAP_PROJECTION),
    );
    mapOptions.bounds = new LngLatBounds(bbox(value4326.current) as any);
    mapOptions.fitBoundsOptions = { padding: 50, maxZoom: 16 };
  }

  function addDrawEvents() {
    if (!map.current) return;

    function onDrawChange() {
      if (!mapDraw.current) return;

      let featureCollection = mapDraw.current.getAll();

      if (projection) {
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

    if (!(draw as DrawOptions)?.multi) {
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
  const styles = getMapStyles(theme.colors.map);

  useEffect(() => {
    // stops map from intializing more than once (or container not exists)
    if (map.current || !mapContainer?.current) return;

    mapOptions.container = mapContainer.current;
    map.current = new MaplibreMap(mapOptions as MapOptions);

    addMapControls(map.current, controls);

    if (draw && !preview) {
      mapDraw.current = enableDraw(map.current, draw, value4326.current, styles);
      addDrawEvents();
    } else if (value4326.current) {
      setupPreviewLayer(map.current, value4326.current, styles);
    }

    onLoad?.(map.current);
  }, [mapContainer, onLoad]);

  return (
    <FieldWrapper label={label} error={error}>
      <MapDiv ref={mapContainer} $error={!!error} />
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
