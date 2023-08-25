import type { Meta, StoryObj } from "@storybook/react";
import NumericTextField from "./NumericTextField";

const meta: Meta<typeof NumericTextField> = {
    title: "Components/NumericTextField",
    component: NumericTextField,
};

export default meta;

type Story = StoryObj<typeof NumericTextField>;

export const Primary: Story = {
    render: () => <NumericTextField onChange={()=>{}} label="Label"/>,
};


