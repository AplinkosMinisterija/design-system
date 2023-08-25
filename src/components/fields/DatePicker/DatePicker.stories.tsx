import type { Meta, StoryObj } from "@storybook/react";
import DatePicker from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
    title: "Components/DatePicker",
    component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

export const Primary: Story = {
    render: () => <DatePicker onChange={()=>{}}/>,
};


