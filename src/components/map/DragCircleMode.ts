// @ts-ignore
import MapboxDraw from '@mapbox/mapbox-gl-draw';
import circle from '@turf/circle';
import { lineString } from '@turf/helpers';
import length from '@turf/length';

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

export function DragCircleMode(opts: { initial?: number; max: number; min: number }) {
  const Mode = { ...MapboxDraw.modes.draw_polygon };

  Mode.onSetup = function () {
    const polygon = this.newFeature({
      type: MapboxDraw.constants.geojsonTypes.FEATURE,
      properties: {
        isCircle: true,
        center: [],
      },
      geometry: {
        type: MapboxDraw.constants.geojsonTypes.POLYGON,
        coordinates: [],
      },
    });

    this.addFeature(polygon);

    this.clearSelectedFeatures();
    // doubleClickZoom.disable(this);
    dragPan.disable(this);
    this.updateUIClasses({ mouse: MapboxDraw.constants.cursors.ADD });
    this.activateUIButton(MapboxDraw.constants.types.POINT);
    this.setActionableState({
      trash: true,
    });

    return {
      polygon,
    };
  };

  Mode.updatePolygonCoords = function (state) {
    const center = state.polygon.properties.center;
    const buffer = state.polygon.properties.buffer;

    if (!center || !buffer) return;
    const circleFeature = circle(center, buffer, { units: 'meters' });

    state.polygon.incomingCoords(circleFeature.geometry.coordinates);
  };

  Mode.onMouseDown = Mode.onTouchStart = function (state, e) {
    const currentCenter = state.polygon.properties.center;
    if (!currentCenter.length) {
      const center = [e.lngLat.lng, e.lngLat.lat];
      state.polygon.properties.center = center;
      state.polygon.properties.buffer = opts.initial || opts.min;
      Mode.updatePolygonCoords(state);
    }
  };

  Mode.onDrag = Mode.onMouseMove = function (state, e) {
    const center = state.polygon.properties.center;

    if (center.length > 0) {
      const line = lineString([center, [e.lngLat.lng, e.lngLat.lat]]);
      const buffer = length(line, { units: 'meters' });

      if (buffer <= opts.max && (!opts.min || buffer >= opts.min)) {
        state.polygon.properties.buffer = buffer;
        Mode.updatePolygonCoords(state);
      }
    }
  };

  Mode.onMouseUp = Mode.onTouchEnd = function (state, e) {
    dragPan.enable(this);
    return this.changeMode(MapboxDraw.constants.modes.SIMPLE_SELECT, {
      featureIds: [state.polygon.id],
    });
  };

  Mode.onClick = Mode.onTap = function (state, e) {
    // don't draw the circle if its a tap or click event
    state.polygon.properties.center = [];
  };

  Mode.toDisplayFeatures = function (state, geojson, display) {
    const isActivePolygon = geojson.properties.id === state.polygon.id;
    geojson.properties.active = isActivePolygon
      ? MapboxDraw.constants.activeStates.ACTIVE
      : MapboxDraw.constants.activeStates.INACTIVE;
    return display(geojson);
  };

  return Mode;
}
