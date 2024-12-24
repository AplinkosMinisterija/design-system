import {
  ControlPosition,
  FullscreenControl,
  GeoJSONSource,
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
import epsg3346 from 'epsg-index/s/3346.json';
// @ts-ignore
import epsg4326 from 'epsg-index/s/4326.json';

import { coordEach, featureEach } from '@turf/meta';
import { cloneDeep, mergeWith } from 'lodash';
import { ThemeMapColors } from 'src/types';
import { DragCircle, convertCircleToPoint, convertFeatureToCircle } from './modes';
import { DirectSelect, SimpleSelect } from './modes';

const epsg = {
  3346: epsg3346,
  4326: epsg4326,
}
export const BASEMAP_URL = {
  LIGHT: 'https://basemap.biip.lt/styles/bright/style.json',
  GRAY: 'https://basemap.biip.lt/styles/positron/style.json',
};

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
        initial?: number;
      };
};

export const PREVIEW_LAYER_ID = 'preview-layer';
export const MAP_PROJECTION = '4326';
export const LKS_PROJECTION = '3346';

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
    if (typeof dist !== 'undefined') return dist;
    return src;
  }) as DrawOptions;
}

export function enableDraw(map: Map, draw: DrawOptions, value?: AllGeoJSON, styles?: any[]) {
  if (!draw || !map) return;

  if (draw.buffer) {
    draw.buffer = typeof draw.buffer === 'boolean' ? { max: 10, min: 1 } : draw.buffer;
  }

  if (!Array.isArray(draw.types)) draw.types = [draw.types];

  let modes = MapboxDraw.modes;

  if (draw.buffer) {
    // TODO: setup lines
    modes = Object.assign(modes, {
      draw_point: DragCircle(draw.buffer),
      simple_select: SimpleSelect(),
      direct_select: DirectSelect({ circle: draw.buffer }),
    });
  }

  const mapDraw = new MapboxDraw({
    controls: {
      point: draw.types.includes(DrawType.POINT),
      line_string: draw.types.includes(DrawType.LINE),
      polygon: draw.types.includes(DrawType.POLYGON),
      trash: draw.types.length > 1 || draw.multi,
    },
    modes,
    styles,
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

export function transformBufferedItems(source: AllGeoJSON, toPolygons: boolean = true) {
  featureEach(source as any, (feature, index) => {
    let item: any;
    if (toPolygons) item = convertFeatureToCircle(feature);
    else item = convertCircleToPoint(feature);

    if (item) {
      (source as any).features[index] = item;
    }
  });

  return source;
}

export function setupPreviewLayer(map?: Map, value?: AllGeoJSON, styles?: any[]) {
  if (!map || !value) return;

  const loadLayer = () => {
    map.addSource(PREVIEW_LAYER_ID, {
      type: 'geojson',
      data: value,
    });

    styles?.forEach((style) => {
      map.addLayer({
        ...style,
        source: PREVIEW_LAYER_ID,
      });
    });
  };

  const isLoaded = map.loaded();
  if (!isLoaded) {
    map.on('load', loadLayer);
  } else {
    loadLayer();
  }
}

export function setPreviewLayerValue(map?: Map, value?: AllGeoJSON, styles?: any[]) {
  if (!map || !value) return;

  const source = map.getSource(PREVIEW_LAYER_ID) as GeoJSONSource;
  if (!source) {
    return setupPreviewLayer(map, value, styles);
  }

  source.setData(value);
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

export function getMapStyles(colors: ThemeMapColors) {
  if (!colors?.primary) {
    throw new Error('Setup theme colors for map!');
  }

  const isPoint = ['==', '$type', 'Point'];
  const isLine = ['==', '$type', 'LineString'];
  const isPolygon = ['==', '$type', 'Polygon'];
  const isActive = ['==', 'active', 'true'];
  const isNotActive = ['!=', 'active', 'true'];
  const isPointActive = ['any', isActive, ['==', 'meta', 'midpoint'], ['==', 'meta', 'vertex']];
  const isPointNotActive = [
    'all',
    isNotActive,
    ['!=', 'meta', 'midpoint'],
    ['!=', 'meta', 'vertex'],
  ];

  const states = {
    colors: {
      default: colors.primary,
      active: colors.selected || colors.primary,
    },
    opacity: {
      default: 0.7,
      active: 1,
    },
    fillOpacity: {
      default: 0.1,
      active: 0.15,
    },
    line: {
      width: {
        default: 3,
        active: 3,
      },
    },
    circle: {
      radius: {
        active: 7,
        default: 5,
      },
    },
  };

  return [
    {
      id: 'draw-points',
      type: 'circle',
      filter: ['all', isPoint, isPointNotActive],
      paint: {
        'circle-radius': states.circle.radius.default,
        'circle-color': states.colors.default,
        'circle-opacity': states.opacity.default,
      },
    },
    {
      id: 'draw-points-active',
      type: 'circle',
      filter: ['all', isPoint, isPointActive],
      paint: {
        'circle-radius': states.circle.radius.active,
        'circle-color': states.colors.active,
        'circle-opacity': states.opacity.active,
      },
    },
    {
      id: 'draw-line',
      type: 'line',
      filter: ['all', ['any', isLine, isPolygon], isNotActive],
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': states.colors.default,
        'line-width': states.line.width.default,
        'line-opacity': states.opacity.default,
      },
    },
    {
      id: 'draw-line-active',
      type: 'line',
      filter: ['all', ['any', isLine, isPolygon], isActive],
      layout: {
        'line-cap': 'round',
        'line-join': 'round',
      },
      paint: {
        'line-color': states.colors.active,
        'line-width': states.line.width.active,
        'line-opacity': states.opacity.active,
      },
    },
    {
      id: 'draw-fill',
      type: 'fill',
      filter: ['all', isPolygon, isNotActive],
      paint: {
        'fill-color': states.colors.default,
        'fill-outline-color': states.colors.default,
        'fill-opacity': states.fillOpacity.default,
      },
    },
    {
      id: 'draw-fill-active',
      type: 'fill',
      filter: ['all', isPolygon, isActive],
      paint: {
        'fill-color': states.colors.active,
        'fill-outline-color': states.colors.active,
        'fill-opacity': states.fillOpacity.active,
      },
    },
  ];
}
