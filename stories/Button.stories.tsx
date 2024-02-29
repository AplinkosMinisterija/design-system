import type { Meta, StoryObj } from '@storybook/react';

import Button from "../components/Button";
import ComponentContainer from "./ComponentContainer";

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    name: 'Primary button',
    render: () => {
        return (
            <ComponentContainer>
                <Button>Primary</Button>
            </ComponentContainer>
        );
    },
};
export const Secondary: Story = {
    name: 'Secondary button',
    render: () => {
        return (
            <ComponentContainer>
                <Button variant={Button.colors.SECONDARY}>Secondary</Button>
            </ComponentContainer>
        );
    },
};

export const Tertiary: Story = {
    name: 'Tertiary button',
    render: () => {
        return (
            <ComponentContainer>
                <Button variant={Button.colors.TERTIARY}>Tertiary</Button>
            </ComponentContainer>
        );
    },
};

export const Transparent: Story = {
    name: 'Transparent button',
    render: () => {
        return (
            <ComponentContainer>
                <Button variant={Button.colors.TRANSPARENT}>Transparent</Button>
            </ComponentContainer>
        );
    },
};

export const Danger: Story = {
    name: 'Danger button',
    render: () => {
        return (
            <ComponentContainer>
                <Button variant={Button.colors.DANGER}>Destructive action</Button>
            </ComponentContainer>
        );
    },
};

export const Success: Story = {
    name: 'Success button',
    render: () => {
        return (
            <ComponentContainer>
                <Button variant={Button.colors.SUCCESS}>Ok</Button>
            </ComponentContainer>
        );
    },
};