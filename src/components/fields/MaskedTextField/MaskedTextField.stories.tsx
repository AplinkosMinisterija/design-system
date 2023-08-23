import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MaskedTextField from "./MaskedTextField";

const meta: Meta<typeof MaskedTextField> = {
    title: "Components/MaskedTextField",
    component: MaskedTextField,
};

export default meta;

type Story = StoryObj<typeof MaskedTextField>;

export const Primary: Story = {
    render: () => <MaskedTextField onChange={()=>{}} mask={'0000-/00/00'} maskChar={'_'} label={"Label"}/>,
};


