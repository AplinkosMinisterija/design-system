import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import MultiSelect from "./MultiSelect";

const meta: Meta<typeof MultiSelect> = {
    title: "Components/MultiSelect",
    component: MultiSelect,
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const Primary: Story = {
    render: () => <MultiSelect onChange={()=>{}} options={[{id: '1', label:'option1'}, {id: '2', label:'option2'}, {id: '3', label:'option3'}]} values={[{id: '1', label:'option1'}, {id: '2', label:'option2'}]}/>,
};


