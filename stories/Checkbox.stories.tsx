import type { Meta, StoryObj } from '@storybook/react';

import Checkbox from "../components/Checkbox";
import StoryWrapper from "../common/StoryWrapper";

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const CheckboxStory: Story = {
    name: 'Checkbox',
    render: () => {
        return (
            <StoryWrapper>
                <Checkbox label={"label"}/>
            </StoryWrapper>
        );
    },
};