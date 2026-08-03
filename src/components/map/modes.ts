import MapboxDraw from '@mapbox/mapbox-gl-draw';
import center from '@turf/center';

import circle from '@turf/circle';
import { lineString } from '@turf/helpers';
import length from '@turf/length';
import { cloneDeep } from 'lodash';

interface DrawContext {
  map?: { dragPan?: { enable: () => void; disable: () => void } };
  _ctx?: { store?: { getInitialConfigValue: (key: string) => boolean } };
}

const dragPan = {
  enable(ctx: DrawContext) {
    setTimeout(() => {
      // First check we've got a map and some context.
      if (
        !ctx.map ||
        !ctx.map.dragPan ||
        !ctx._ctx ||
        !ctx._ctx.store ||
        !ctx._ctx.store.getInitialConfigValue
      )
        return;
      // Now check initial state wasn't false (we leave it disabled if so)
      if (!ctx._ctx.store.getInitialConfigValue('dragPan')) return;
      ctx.map.dragPan.enable();
    }, 0);
  },
  disable(ctx: DrawContext) {
    setTimeout(() => {
      if (!ctx.map || !ctx.map.dragPan) return;
      // Always disable here, as it's necessary in some cases.
      ctx.map.dragPan.disable();
    }, 0);
  },
};

interface GeoJsonFeature {
  type: 'Feature';
  properties: Record<string, any>;
  geometry: { type: string; coordinates: [number, number][] | number[][][] };
  id?: string | number;
  incomingCoords: (coords: number[][][]) => void;
}

function createSupplementaryPointsForCircle(
  geojson: GeoJsonFeature,
  midpoints = false,
): any[] | null {
  const { properties, geometry } = geojson;

  if (!properties.user_isCircle) return null;

  const supplementaryPoints: any[] = [];
  const coordinates = geometry.coordinates as [number, number][] | number[][];
  const vertices = (Array.isArray(coordinates[0]) ? coordinates[0] : coordinates).slice(0, -1) as [number, number][];

  for (
    let index = 0;
    index < vertices.length;
    index += Math.round(vertices.length / (midpoints ? 4 : 2))
  ) {
    const vertex = MapboxDraw.lib.createVertex(properties.id, vertices[index] as [number, number], `0.${index}`, false);
    supplementaryPoints.push(vertex);
  }
  return supplementaryPoints;
}

export function convertFeatureToCircle(geom: any) {
  const point = center(geom);
  const buffer = geom?.properties?.bufferSize;
  if (!buffer) return;
  const coords = point.geometry.coordinates as [number, number];
  return circle(coords, buffer, {
    units: 'meters',
    properties: { center: coords, buffer, isCircle: true },
  });
}

export function convertCircleToPoint(geom: any) {
  return center(geom, { properties: { bufferSize: geom.properties.buffer } });
}

function updateCircleGeometry(feature: GeoJsonFeature) {
  const centerCoords = feature.properties.center as [number, number];
  const buffer = feature.properties.buffer as number;

  if (!centerCoords || !buffer) return;
  const circleFeature = circle(centerCoords, buffer, { units: 'meters' });

  feature.incomingCoords(circleFeature.geometry.coordinates as number[][][]);
}

interface MapEvent {
  lngLat: { lng: number; lat: number };
}

function calculateCircleBuffersAndUpdate(
  feature: GeoJsonFeature,
  e: MapEvent,
  opts: CircleOptions,
) {
  const centerCoords = feature.properties.center as number[] | undefined;

  if (centerCoords && centerCoords.length > 0) {
    const line = lineString([centerCoords as [number, number], [e.lngLat.lng, e.lngLat.lat]]);
    const buffer = Math.round(length(line, { units: 'meters' }));

    if ((!opts.min && !opts.max) || (buffer <= opts.max && (!opts.min || buffer >= opts.min))) {
      feature.properties.buffer = buffer;
      updateCircleGeometry(feature);
    }
  }
}

type CircleOptions = { initial?: number; max: number; min: number };

interface DrawState {
  polygon: GeoJsonFeature & { coordinates: number[][] };
}

export function DragCircle(opts: CircleOptions) {
  const Mode: any = cloneDeep(MapboxDraw.modes.draw_polygon);

  const defaultOnSetup = (MapboxDraw.modes as any).draw_polygon.onSetup;

  Mode.onSetup = function (this: any) {
    const { polygon } = defaultOnSetup?.bind(this)?.() || { polygon: {} };

    // additional things
    polygon.properties.isCircle = true;
    polygon.properties.center = [];
    polygon.coordinates = [];
    dragPan.disable(this);
    this.activateUIButton('point');

    return { polygon };
  };

  Mode.onMouseDown = Mode.onTouchStart = function (this: any, state: DrawState, e: MapEvent) {
    const currentCenter = state.polygon.properties.center;
    if (!currentCenter.length) {
      state.polygon.properties.center = [e.lngLat.lng, e.lngLat.lat];
      state.polygon.properties.buffer = opts.initial || opts.min;
      updateCircleGeometry(state.polygon);
    }
  };

  Mode.onDrag = Mode.onMouseMove = function (this: any, state: DrawState, e: MapEvent) {
    calculateCircleBuffersAndUpdate(state.polygon, e, opts);
  };

  Mode.onMouseUp = Mode.onTouchEnd = function (this: any, state: DrawState) {
    dragPan.enable(this);
    return this.changeMode(MapboxDraw.constants.modes.SIMPLE_SELECT, {
      featureIds: [state.polygon.id],
    });
  };

  Mode.onClick = Mode.onTap = function (this: any, state: DrawState, e: MapEvent) {
    if (opts.min || opts.initial) {
      // set initial values and finish everything
      Mode.onMouseDown.bind(this)(state, e);
      Mode.onMouseUp.bind(this)(state);
    } else {
      // don't draw the circle if its a tap or click event
      this.changeMode(MapboxDraw.constants.modes.SIMPLE_SELECT);
    }
  };

  Mode.toDisplayFeatures = function (
    this: any,
    state: DrawState,
    geojson: GeoJsonFeature,
    display?: (f: any) => void,
  ) {
    const isActive = geojson.properties.id === state.polygon.id;
    geojson.properties.active = isActive
      ? MapboxDraw.constants.activeStates.ACTIVE
      : MapboxDraw.constants.activeStates.INACTIVE;
    if (display) display(geojson);
  };

  return Mode;
}

export function SimpleSelect() {
  const Mode: any = { ...(MapboxDraw.modes as any).simple_select };

  const defaultDragMove = (MapboxDraw.modes as any).simple_select.dragMove;

  Mode.dragMove = function (this: any, state: any, e: MapEvent) {
    const delta = {
      lng: e.lngLat.lng - state.dragMoveLocation.lng,
      lat: e.lngLat.lat - state.dragMoveLocation.lat,
    };

    this.getSelected()
      .filter((feature: GeoJsonFeature) => feature.properties.isCircle)
      .map((circle: GeoJsonFeature) => circle.properties.center)
      .forEach((center: number[]) => {
        center[0] += delta.lng;
        center[1] += delta.lat;
      });

    defaultDragMove?.bind(this)(state, e);
  };

  Mode.toDisplayFeatures = function (
    this: any,
    _state: any,
    geojson: GeoJsonFeature,
    display: (f: GeoJsonFeature) => void,
  ) {
    geojson.properties.active = this.isSelected(geojson.properties.id)
      ? MapboxDraw.constants.activeStates.ACTIVE
      : MapboxDraw.constants.activeStates.INACTIVE;
    display(geojson);
    this.fireActionable?.();
    if (
      geojson.properties.active !== MapboxDraw.constants.activeStates.ACTIVE ||
      geojson.geometry?.type === MapboxDraw.constants.geojsonTypes.POINT
    )
      return;

    const supplementaryPoints = geojson.properties.user_isCircle
      ? createSupplementaryPointsForCircle(geojson)
      : (MapboxDraw.lib as any).createSupplementaryPoints(geojson);
    supplementaryPoints?.forEach(display);
  };

  return Mode;
}
interface DirectSelectOptions {
  circle?: CircleOptions;
}

export function DirectSelect(opts: DirectSelectOptions) {
  const Mode: any = { ...(MapboxDraw.modes as any).direct_select };

  const defaultDragVertexFn = (MapboxDraw.modes as any).direct_select.dragVertex;
  const defaultDragFeature = (MapboxDraw.modes as any).direct_select.dragFeature;

  Mode.dragFeature = function (
    this: any,
    state: any,
    e: MapEvent,
    delta: { lng: number; lat: number },
  ) {
    this.getSelected()
      .filter((feature: GeoJsonFeature) => feature.properties.isCircle)
      .map((circle: GeoJsonFeature) => circle.properties.center)
      .forEach((center: number[]) => {
        center[0] += delta.lng;
        center[1] += delta.lat;
      });

    defaultDragFeature?.bind(this)(state, e, delta);
  };

  Mode.dragVertex = function (
    this: any,
    state: any,
    e: MapEvent,
    delta: { lng: number; lat: number },
  ) {
    if (state.feature.properties.isCircle && opts.circle) {
      calculateCircleBuffersAndUpdate(state.feature, e, opts.circle);
    } else {
      defaultDragVertexFn?.bind(this)(state, e, delta);
    }
  };

  Mode.toDisplayFeatures = function (
    this: any,
    state: any,
    geojson: GeoJsonFeature,
    push: (f: GeoJsonFeature) => void,
  ) {
    if (state.featureId === geojson.properties.id) {
      geojson.properties.active = MapboxDraw.constants.activeStates.ACTIVE;
      push(geojson);
      const supplementaryPoints = geojson.properties.user_isCircle
        ? createSupplementaryPointsForCircle(geojson, true)
        : (MapboxDraw.lib as any).createSupplementaryPoints(geojson, {
            map: this.map,
            midpoints: true,
            selectedCoordPaths: state.selectedCoordPaths,
          });
      supplementaryPoints?.forEach(push);
    } else {
      geojson.properties.active = MapboxDraw.constants.activeStates.INACTIVE;
      push(geojson);
    }
    this.fireActionable?.(state);
  };

  return Mode;
}
