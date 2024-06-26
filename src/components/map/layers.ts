import { LayerSpecification, SourceSpecification } from 'maplibre-gl';
import { ThemeMapColors } from 'src/types';

export function MapLayers(colors: ThemeMapColors): {
  [key: string]: { source: SourceSpecification; layers: LayerSpecification[] };
} {
  function getDefaultStyles(type: string): LayerSpecification[] {
    return [
      {
        source: type,
        'source-layer': type,
        id: `${type}-outline`,
        type: 'line',
        layout: {
          'line-cap': 'round',
          'line-join': 'round',
        },
        paint: {
          'line-color': colors.outline || colors.selected,
          'line-width': 2,
          'line-opacity': 0.7,
        },
      },
      {
        source: type,
        'source-layer': type,
        id: `${type}-fill`,
        type: 'fill',
        paint: {
          'fill-color': colors.fill || colors.primary,
          'fill-outline-color': colors.fill || colors.primary,
          'fill-opacity': 0.1,
        },
      },
    ];
  }
  return {
    municipalities: {
      source: {
        type: 'vector',
        url: 'pmtiles://https://boundaries.startupgov.lt/pmtiles/municipalities.pmtiles',
      },
      layers: getDefaultStyles('municipalities'),
    },
    elderships: {
      source: {
        type: 'vector',
        url: 'pmtiles://https://boundaries.startupgov.lt/pmtiles/elderships.pmtiles',
      },
      layers: getDefaultStyles('elderships'),
    },
    counties: {
      source: {
        type: 'vector',
        url: 'pmtiles://https://boundaries.startupgov.lt/pmtiles/counties.pmtiles',
      },
      layers: getDefaultStyles('counties'),
    },
  };
}
