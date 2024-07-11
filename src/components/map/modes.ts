// @ts-ignore
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import center from '@turf/center';

import circle from '@turf/circle';
import { lineString } from '@turf/helpers';
import length from '@turf/length';
import { cloneDeep } from 'lodash';

const dragPan = {
  enable(ctx) {
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
  disable(ctx) {
    setTimeout(() => {
      if (!ctx.map || !ctx.map.doubleClickZoom) return;
      // Always disable here, as it's necessary in some cases.
      ctx.map.dragPan.disable();
    }, 0);
  },
};

function createSupplementaryPointsForCircle(geojson, midpoints = false) {
  const { properties, geometry } = geojson;

  if (!properties.user_isCircle) return null;

  const supplementaryPoints: any[] = [];
  const vertices = geometry.coordinates[0].slice(0, -1);

  for (
    let index = 0;
    index < vertices.length;
    index += Math.round(vertices.length / (midpoints ? 4 : 2))
  ) {
    const vertex = MapboxDraw.lib.createVertex(properties.id, vertices[index], `0.${index}`, false);
    supplementaryPoints.push(vertex);
  }
  return supplementaryPoints;
}

export function convertFeatureToCircle(geom) {
  const point = center(geom);
  const buffer = geom?.properties?.bufferSize;
  if (!buffer) return;
  const coords = point.geometry.coordinates;
  return circle(coords, buffer, {
    units: 'meters',
    properties: { center: coords, buffer, isCircle: true },
  });
}

export function convertCircleToPoint(geom) {
  return center(geom, { properties: { bufferSize: geom.properties.buffer } });
}

function updateCircleGeometry(feature) {
  const center = feature.properties.center;
  const buffer = feature.properties.buffer;

  if (!center || !buffer) return;
  const circleFeature = circle(center, buffer, { units: 'meters' });

  feature.incomingCoords(circleFeature.geometry.coordinates);
}

function calculateCircleBuffersAndUpdate(feature, e, opts) {
  const center = feature.properties.center;

  if (center?.length > 0) {
    const line = lineString([center, [e.lngLat.lng, e.lngLat.lat]]);
    const buffer = Math.round(length(line, { units: 'meters' }));

    if ((!opts.min && !opts.max) || (buffer <= opts.max && (!opts.min || buffer >= opts.min))) {
      feature.properties.buffer = buffer;
      updateCircleGeometry(feature);
    }
  }
}

type CircleOptions = { initial?: number; max: number; min: number };

export function DragCircle(opts: CircleOptions) {
  const Mode = cloneDeep(MapboxDraw.modes.draw_polygon);

  const defaultOnSetup = MapboxDraw.modes.draw_polygon.onSetup;

  Mode.onSetup = function () {
    const { polygon } = defaultOnSetup.bind(this)();

    // additional things
    polygon.properties.isCircle = true;
    polygon.properties.center = [];
    polygon.coordinates = [];
    dragPan.disable(this);
    this.activateUIButton(MapboxDraw.constants.types.POINT);

    return { polygon };
  };

  Mode.onMouseDown = Mode.onTouchStart = function (state, e) {
    const currentCenter = state.polygon.properties.center;
    if (!currentCenter.length) {
      const center = [e.lngLat.lng, e.lngLat.lat];
      state.polygon.properties.center = center;
      state.polygon.properties.buffer = opts.initial || opts.min;
      updateCircleGeometry(state.polygon);
    }
  };

  Mode.onDrag = Mode.onMouseMove = function (state, e) {
    calculateCircleBuffersAndUpdate(state.polygon, e, opts);
  };

  Mode.onMouseUp = Mode.onTouchEnd = function (state) {
    dragPan.enable(this);
    return this.changeMode(MapboxDraw.constants.modes.SIMPLE_SELECT, {
      featureIds: [state.polygon.id],
    });
  };

  Mode.onClick = Mode.onTap = function (state, e) {
    if (opts.min || opts.initial) {
      // set initial values and finish everything
      Mode.onMouseDown.bind(this)(state, e);
      Mode.onMouseUp.bind(this)(state, e);
    } else {
      // don't draw the circle if its a tap or click event
      state.polygon.properties.center = [];
    }
  };

  Mode.toDisplayFeatures = function (state, geojson, display) {
    const isActive = geojson.properties.id === state.polygon.id;
    geojson.properties.active = isActive
      ? MapboxDraw.constants.activeStates.ACTIVE
      : MapboxDraw.constants.activeStates.INACTIVE;
    return display(geojson);
  };

  return Mode;
}

export function SimpleSelect() {
  const Mode = { ...MapboxDraw.modes.simple_select };

  const defaultDragMove = MapboxDraw.modes.simple_select.dragMove;

  Mode.dragMove = function (state, e) {
    const delta = {
      lng: e.lngLat.lng - state.dragMoveLocation.lng,
      lat: e.lngLat.lat - state.dragMoveLocation.lat,
    };

    this.getSelected()
      .filter((feature) => feature.properties.isCircle)
      .map((circle) => circle.properties.center)
      .forEach((center) => {
        center[0] += delta.lng;
        center[1] += delta.lat;
      });

    defaultDragMove.bind(this)(state, e);
  };

  Mode.toDisplayFeatures = function (_, geojson, display) {
    geojson.properties.active = this.isSelected(geojson.properties.id)
      ? MapboxDraw.constants.activeStates.ACTIVE
      : MapboxDraw.constants.activeStates.INACTIVE;
    display(geojson);
    this.fireActionable();
    if (
      geojson.properties.active !== MapboxDraw.constants.activeStates.ACTIVE ||
      geojson.geometry.type === MapboxDraw.constants.geojsonTypes.POINT
    )
      return;

    const supplementaryPoints = geojson.properties.user_isCircle
      ? createSupplementaryPointsForCircle(geojson)
      : MapboxDraw.lib.createSupplementaryPoints(geojson);
    supplementaryPoints.forEach(display);
  };

  return Mode;
}
export function DirectSelect(opts: { circle?: CircleOptions }) {
  const Mode = { ...MapboxDraw.modes.direct_select };

  const defaultDragVertexFn = MapboxDraw.modes.direct_select.dragVertex;
  const defaultDragFeature = MapboxDraw.modes.direct_select.dragFeature;

  Mode.dragFeature = function (state, e, delta) {
    this.getSelected()
      .filter((feature) => feature.properties.isCircle)
      .map((circle) => circle.properties.center)
      .forEach((center) => {
        center[0] += delta.lng;
        center[1] += delta.lat;
      });

    defaultDragFeature.bind(this)(state, e, delta);
  };

  Mode.dragVertex = function (state, e, delta) {
    if (state.feature.properties.isCircle) {
      calculateCircleBuffersAndUpdate(state.feature, e, opts?.circle);
    } else {
      defaultDragVertexFn.bind(this)(state, e, delta);
    }
  };

  Mode.toDisplayFeatures = function (state, geojson, push) {
    if (state.featureId === geojson.properties.id) {
      geojson.properties.active = MapboxDraw.constants.activeStates.ACTIVE;
      push(geojson);
      const supplementaryPoints = geojson.properties.user_isCircle
        ? createSupplementaryPointsForCircle(geojson, true)
        : MapboxDraw.lib.createSupplementaryPoints(geojson, {
            map: this.map,
            midpoints: true,
            selectedPaths: state.selectedCoordPaths,
          });
      supplementaryPoints.forEach(push);
    } else {
      geojson.properties.active = MapboxDraw.constants.activeStates.INACTIVE;
      push(geojson);
    }
    this.fireActionable(state);
  };

  return Mode;
}
