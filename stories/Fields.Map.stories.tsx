import type { Meta, StoryObj } from '@storybook/react';
import Map from '../src/components/map/Index';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { AllGeoJSON } from '@turf/helpers';
import { DrawType } from '../src/components/map/functions';
import { useState, useEffect } from 'react';
import ItemPicker from '../src/components/ItemPicker';
import { Map as MaplibreMap } from 'maplibre-gl';

const meta: Meta<typeof Map> = {
  component: Map,
  title: 'Design system/Fields/Map',
};

export default meta;
type Story = StoryObj<typeof Map>;

const locations = [
  {
    key: 'headless',
    name: 'Vienas',
    value: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            coordinates: [
              [
                [372264.341928658, 6148104.637095206],
                [392793.27301906166, 6191050.807394949],
                [415804.682109856, 6134551.771726668],
                [372264.341928658, 6148104.637095206],
              ],
            ],
            type: 'Polygon',
          },
          properties: {},
        },
      ],
    },
  },
  {
    key: 'reusable',
    name: 'Du',
    value: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: {},
          geometry: {
            coordinates: [
              [360891.6925018474, 6162308.1965951035],
              [377300.410903006, 6203126.157620146],
            ],
            type: 'LineString',
          },
        },
      ],
    },
  },
  {
    key: 'item',
    name: 'Tris',
    value: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          geometry: {
            coordinates: [391178.66657390795, 6208916.019213109],
            type: 'Point',
          },
          properties: { bufferSize: 1000 },
        },
      ],
    },
  },
];

const initialLayers = [
  { ids: ['footprint_tracks-outline', 'footprint_tracks-name'], name: 'Pėdsakai', visible: true },
  {
    ids: ['hunting_areas-outline', 'hunting_areas-name'],
    name: 'Medžioklės plotas',
    visible: false,
  },
];

const StoryComponent = () => {
  const [map, setMap] = useState<MaplibreMap | undefined>(undefined);
  const [value, setValue] = useState<AllGeoJSON>(undefined);
  const [location, setLocation] = useState([]);
  const [toggleLayers, setToggleLayers] = useState(initialLayers);

  const whenMapLoads = (cb: () => void) => {
    if (!map) return;
    if (!map.loaded()) {
      return map.on('load', () => cb());
    }
    return cb();
  };

  useEffect(() => {
    whenMapLoads(() => {
      // FOOTPRINT TRACKS
      const sourceId = 'footprint_tracks';
      if (!map.getSource(sourceId)) {
        map.addSource(sourceId, {
          type: 'vector',
          url: 'pmtiles://https://cdn.biip.lt/tiles/medziokle/pmtiles/footprint-tracks.pmtiles',
        });

        map.addLayer({
          source: sourceId,
          'source-layer': sourceId,
          id: `${sourceId}-outline`,
          type: 'line',
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
            visibility: 'visible',
          },
          paint: {
            'line-color': '#f00',
            'line-width': 2,
            'line-opacity': 0.5,
            'line-dasharray': [3, 3],
          },
        });

        map.addLayer({
          source: sourceId,
          'source-layer': sourceId,
          id: `${sourceId}-name`,
          type: 'symbol',
          layout: {
            'text-field': '{track_number}',
            'text-size': 10,
            'text-font': ['Noto Sans Regular'],
            visibility: 'visible',
          },
          paint: { 'text-color': '#f00' },
        });
      }

      // HUNTING AREAS
      const sourceId2 = 'hunting_areas';
      if (!map.getSource(sourceId2)) {
        map.addSource(sourceId2, {
          type: 'vector',
          url: 'pmtiles://https://cdn.biip.lt/tiles/medziokle/pmtiles/hunting-areas.pmtiles',
        });

        map.addLayer({
          source: sourceId2,
          'source-layer': sourceId2,
          id: `${sourceId2}-outline`,
          type: 'line',
          layout: {
            'line-cap': 'round',
            'line-join': 'round',
            visibility: 'none',
          },
          paint: {
            'line-color': '#f00',
            'line-width': 2,
            'line-opacity': 0.5,
          },
        });

        map.addLayer({
          source: sourceId2,
          'source-layer': sourceId2,
          id: `${sourceId2}-name`,
          type: 'symbol',
          layout: {
            'text-field': '{name}',
            'text-size': 10,
            'text-font': ['Noto Sans Regular'],
            visibility: 'none',
          },
          paint: { 'text-color': '#f00' },
        });
      }
    });
  }, [map, toggleLayers]);

  const handleLayerToggle = (layer, visible) => {
    const layerIndex = toggleLayers.indexOf(layer);
    if (layerIndex === -1) return;
    const updatedLayers = [...toggleLayers];
    updatedLayers[layerIndex] = {
      ...layer,
      visible,
    };
    setToggleLayers(updatedLayers);
  };

  return (
    <StoryWrapper>
      <ItemPicker
        getItemKey={(item) => item.key}
        getItemRenderString={(item) => item.name}
        data={locations}
        selectedItems={location}
        setSelectedItems={(items) => {
          setValue(items[0].value);
          setLocation(items);
        }}
      />
      <Map
        label={'Pažymėkite vietą'}
        error={'Laukas privalomas'}
        onChange={(value) => {
          setValue(value);
        }}
        controls={{ fullscreen: 'top-right', geolocate: true, navigation: true }}
        draw={{
          multi: true,
          buffer: { min: 5000, max: 10000 },
          types: [DrawType.POINT, DrawType.POLYGON],
        }}
        value={value}
        toggleLayers={toggleLayers}
        onLayerToggle={handleLayerToggle}
        onLoad={setMap}
      />
    </StoryWrapper>
  );
};

export const MapDrawStory: Story = {
  name: 'Map',
  render: StoryComponent,
};
