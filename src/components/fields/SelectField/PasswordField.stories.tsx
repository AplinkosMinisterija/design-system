import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import SelectField from "./SelectField";

const meta: Meta<typeof SelectField> = {
    title: "Components/SelectField",
    component: SelectField,
};

export default meta;

type Story = StoryObj<typeof SelectField>;

export const Primary: Story = {
    render: () => <SelectField onChange={()=>{}} label="Label" options={[{id: '1', label: 'option1'}, {id: '2', label: 'option2'}, {id: '3', label: 'option3'}]} getOptionLabel={(opt: any)=> opt.label}/>,
};


