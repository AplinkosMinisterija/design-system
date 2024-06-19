import {
  ControlPosition,
  FullscreenControl,
  GeolocateControl,
  Map,
  NavigationControl,
} from 'maplibre-gl';

// @ts-ignore
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import { AllGeoJSON } from '@turf/helpers';
// @ts-ignore
import proj4 from 'proj4';
// @ts-ignore
import epsg from 'epsg-index/all.json';
import { coordEach } from '@turf/meta';
import { cloneDeep, mergeWith } from 'lodash';

export type DrawTypes =
  | MapboxDraw.constants.types.POINT
  | MapboxDraw.constants.types.LINE
  | MapboxDraw.constants.types.POLYGON;

export type MapControls = {
  geolocate?: boolean | ControlPosition;
  fullscreen?: boolean | ControlPosition;
  navigation?: boolean | ControlPosition;
};

export type DrawOptions = {
  types?: DrawTypes | DrawTypes[];
  preview?: boolean;
  multi?: boolean;
  position?: ControlPosition;
  buffer?:
    | boolean
    | {
        min: number;
        max: number;
        step: number;
      };
};

export const PREVIEW_LAYER_ID = 'preview-layer';
export const MAP_PROJECTION = '4326';


export const DrawType = MapboxDraw.constants.types;

export function getPosition(
  fallbackPosition: ControlPosition,
  value?: boolean | ControlPosition,
): ControlPosition {
  return typeof value === 'string' ? value : fallbackPosition;
}

export function parseDrawOptions(draw?: boolean | DrawOptions) {
  if (!draw) return draw;
  const defaultDrawOptions: DrawOptions = {
    multi: true,
    buffer: false,
    types: [DrawType.POINT, DrawType.POLYGON, DrawType.LINE],
    preview: false,
  };

  if (typeof draw === 'boolean') {
    return defaultDrawOptions;
  }

  return mergeWith(draw, defaultDrawOptions, (dist, src) => {
    if (dist && typeof dist !== 'undefined') return dist;
    return src;
  }) as DrawOptions;
}

export function enableDraw(map: Map, draw: DrawOptions, value?: AllGeoJSON) {
  if (!draw || !map) return;

  if (draw.buffer) {
    draw.buffer = typeof draw.buffer === 'boolean' ? { step: 1, max: 10, min: 1 } : draw.buffer;
  }

  if (!Array.isArray(draw.types)) draw.types = [draw.types];

  const mapDraw = new MapboxDraw({
    controls: {
      point: draw.types.includes(DrawType.POINT),
      line_string: draw.types.includes(DrawType.LINE),
      polygon: draw.types.includes(DrawType.POLYGON),
      trash: draw.types.length > 1 || draw.multi,
    },

    // modes: Object.assign({ point_buffer: DragCircleMode }, MapboxDraw.modes),
    styles: getMapStyles(),
    displayControlsDefault: false,
    userProperties: true,
  });

  map.addControl(mapDraw, getPosition('top-left', draw.position));

  if (value) mapDraw.set(value);

  return mapDraw;
}

export function convertGeojsonToProjection(source: AllGeoJSON, from: string, to: string) {
  const fromEPSG = epsg[from];
  const toEPSG = epsg[to];

  if (!fromEPSG.proj4 || !toEPSG.proj4) {
    throw new Error(`At least one of projections (${from}, ${to}) not found`);
  }
  const transform = proj4(fromEPSG.proj4, toEPSG.proj4);
  source = cloneDeep(source);

  coordEach(source, (coords) => {
    const newCoord = transform.forward(coords);
    coords[0] = newCoord[0];
    coords[1] = newCoord[1];
  });

  return source;
}

export function setupPreviewLayer(map?: Map, value?: AllGeoJSON) {
  if (!map || !value) return;
  map.on('load', () => {
    map.addSource(PREVIEW_LAYER_ID, {
      type: 'geojson',
      data: value,
    });

    getMapStyles().forEach((style) => {
      map.addLayer({
        ...(style as any),
        source: PREVIEW_LAYER_ID,
      });
    });
  });
}

export function addMapControls(map: Map, controls?: MapControls) {
  if (!map || !controls) return;

  if (controls?.fullscreen) {
    map.addControl(new FullscreenControl(), getPosition('top-right', controls.fullscreen));
  }

  if (controls?.navigation) {
    map.addControl(new NavigationControl(), getPosition('bottom-right', controls.navigation));
  }

  if (controls?.geolocate) {
    map.addControl(
      new GeolocateControl({
        positionOptions: { enableHighAccuracy: true },
        trackUserLocation: true,
      }),
      getPosition('bottom-right', controls.geolocate),
    );
  }
}

export function getMapStyles() {
  const primaryColor = '#D20C0C';

  return [
    {
      id: 'draw-points',
      type: 'circle',
      filter: ['all', ['==', '$type', 'Point']],
      paint: {
        'circle-radius': 5,

        'circle-color': primaryColor,
        'circle-opacity': 0.7,
      },
    },
    {
      id: 'draw-line',
      type: 'line',
      filter: ['any', ['==', '$type', 'LineString'], ['==', '$type', 'Polygon']],
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': primaryColor,
        'line-width': 3,
        'line-opacity': 0.7,
      },
    },
    {
      id: 'draw-fill',
      type: 'fill',
      filter: ['all', ['==', '$type', 'Polygon']],
      paint: {
        'fill-color': primaryColor,
        'fill-outline-color': primaryColor,
        'fill-opacity': 0.1,
      },
    },
  ];
}
