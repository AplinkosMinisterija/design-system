import type { Meta, StoryObj } from '@storybook/react';

import PasswordField from "../components/PasswordField";
import ComponentContainer from "./ComponentContainer";

const meta: Meta<typeof PasswordField> = {
    component: PasswordField,
};

export default meta;
type Story = StoryObj<typeof PasswordField>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
    name: 'Password Field',
    render: () => {
        return (
            <ComponentContainer>
                <PasswordField/>
            </ComponentContainer>
        );
    },
};