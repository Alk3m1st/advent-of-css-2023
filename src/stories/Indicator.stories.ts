import type { Meta, StoryObj } from "@storybook/react";

import { Indicator, indicatorStatuses } from "../components/Indicator";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Indicator",
  component: Indicator,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    status: {
      control: "select",
      options: indicatorStatuses,
    },
  },
} satisfies Meta<typeof Indicator>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Accepted: Story = {
  args: {
    status: "accepted",
  },
};

export const Maybe: Story = {
  args: {
    status: "maybe",
  },
};

export const Declined: Story = {
  args: {
    status: "declined",
  },
};
