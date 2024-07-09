import type { Meta, StoryObj } from '@storybook/react';

import Map from '../src/components/map/Index';
import StoryWrapper from '../src/components/common/StoryWrapper';
import { AllGeoJSON } from '@turf/helpers';
import { DrawType } from '../src/components/map/functions';
import { useState } from 'react';
import ItemPicker from '../src/components/ItemPicker';

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

export const MapDrawStory: Story = {
  name: 'Map',
  render: () => {
    const [value, setValue] = useState<AllGeoJSON>(undefined);
    const [location, setLocation] = useState([]);

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
        />
      </StoryWrapper>
    );
  },
};
