import type { Meta, StoryObj } from '@storybook/react';

import Button from "../components/Button";
import StoryWrapper from "../common/StoryWrapper";

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    name: 'Primary button',
    render: () => {
        return (
            <StoryWrapper>
                <Button>Primary</Button>
            </StoryWrapper>
        );
    },
};
export const Secondary: Story = {
    name: 'Secondary button',
    render: () => {
        return (
            <StoryWrapper>
                <Button variant={Button.colors.SECONDARY}>Secondary</Button>
            </StoryWrapper>
        );
    },
};

export const Tertiary: Story = {
    name: 'Tertiary button',
    render: () => {
        return (
            <StoryWrapper>
                <Button variant={Button.colors.TERTIARY}>Tertiary</Button>
            </StoryWrapper>
        );
    },
};

export const Transparent: Story = {
    name: 'Transparent button',
    render: () => {
        return (
            <StoryWrapper>
                <Button variant={Button.colors.TRANSPARENT}>Transparent</Button>
            </StoryWrapper>
        );
    },
};

export const Danger: Story = {
    name: 'Danger button',
    render: () => {
        return (
            <StoryWrapper>
                <Button variant={Button.colors.DANGER}>Destructive action</Button>
            </StoryWrapper>
        );
    },
};

export const Success: Story = {
    name: 'Success button',
    render: () => {
        return (
            <StoryWrapper>
                <Button variant={Button.colors.SUCCESS}>Ok</Button>
            </StoryWrapper>
        );
    },
};