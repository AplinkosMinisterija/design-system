import type { Meta, StoryObj } from "@storybook/react";
import TextAreaField from "./TextAreaField";

const meta: Meta<typeof TextAreaField> = {
    title: "Components/TextAreaField",
    component: TextAreaField,
};

export default meta;

type Story = StoryObj<typeof TextAreaField>;

export const Primary: Story = {
    render: () => <TextAreaField onChange={()=>{}} label="Label" />,
};


