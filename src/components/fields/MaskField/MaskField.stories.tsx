import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MaskField from "./MaskField";

const meta: Meta<typeof MaskField> = {
    title: "Components/MaskField",
    component: MaskField,
};

export default meta;

type Story = StoryObj<typeof MaskField>;

export const Primary: Story = {
    render: () => <MaskField onChange={()=>{}} mask={'0000-/00/00'} maskChar={'_'} label={"Label"}/>,
};


