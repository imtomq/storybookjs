import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";
import { SelectProps } from "./Select.types";

const meta: Meta<typeof Select> = {
  component: Select,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Primary: Story = {
  render: () => (
    <Select
      options={[
        {
          value: "USD",
          label: "$",
        },
        {
          value: "EUR",
          label: "€",
        },
        {
          value: "BTC",
          label: "฿",
        },
        {
          value: "JPY",
          label: "¥",
        },
      ]}
    />
  ),
};
