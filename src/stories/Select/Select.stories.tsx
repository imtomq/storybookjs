import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import React from "react";

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  render: () => <Select options={[]} />,
};
