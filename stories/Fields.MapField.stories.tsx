import type { Meta, StoryObj } from '@storybook/react';

import StoryWrapper from '../src/components/common/StoryWrapper';
import MapField from '../src/components/MapField';

const meta: Meta<typeof MapField> = {
  component: MapField,
  title: 'Design system/Fields/Map Field',
};

export default meta;
type Story = StoryObj<typeof MapField>;

export const MapFieldStory: Story = {
  name: 'MapField',
  render: () => {
    return (
      <StoryWrapper>
        <MapField
          mapHost={'https://dev-maps.biip.lt'}
          mapPath={'/uetk'}
          label={'Pažymėkite vietą'}
          error={'Laukas privalomas'}
          onChange={(value) => alert(JSON.stringify(value))}
          allow="geolocation *"
        />
      </StoryWrapper>
    );
  },
};
