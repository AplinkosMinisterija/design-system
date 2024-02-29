import type { Meta, StoryObj } from '@storybook/react';

import MapField from "../components/MapField";
import StoryWrapper from "../common/StoryWrapper";

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
                    mapHost={'https://dev.maps.biip.lt'}
                    mapPath={'/edit?types[]=point&buffer=xl'}
                    onChange={(value) => {}}
                />
            </StoryWrapper>
        );
    },
};