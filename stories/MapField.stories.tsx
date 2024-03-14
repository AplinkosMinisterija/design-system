import type { Meta, StoryObj } from '@storybook/react';

import MapField from '../src/components/MapField';
import StoryWrapper from '../src/common/StoryWrapper';

const meta: Meta<typeof MapField> = {
  component: MapField,
};

export default meta;
type Story = StoryObj<typeof MapField>;

export const MapFieldStory: Story = {
  name: 'MapField',
  render: () => {
    return (
      <StoryWrapper>
        <MapField
          mapHost={'https://maps.biip.lt'}
          mapPath={'/edit?types[]=point&buffer=xl'}
          label={'Pažymėkite vietą'}
          error={'Laukas privalomas'}
          onChange={(value) => {}}
        />
      </StoryWrapper>
    );
  },
};
