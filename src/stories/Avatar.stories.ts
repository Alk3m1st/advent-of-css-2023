import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "../components/Avatar";
import AvatarImage01 from "../assets/avatars/avatar-01.png";
import { iconIds } from "../components/Icon";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    avatar: { control: "text" },
    icon: {
      control: "select",
      options: iconIds,
    },
    letter: { control: "text" },
    isSantaHatShowing: { control: "boolean" },
    // size: { control: { type: "range", min: 8, max: 128, step: 2 } },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const WithImage: Story = {
  args: {
    avatar: AvatarImage01,
    alt: "Avatar image",
  },
};

export const Letter: Story = {
  args: {
    letter: "A",
  },
};

export const Icon: Story = {
  args: {
    icon: "eyeClosed",
  },
};

export const WithSantaHat: Story = {
  args: {
    icon: "check",
    isSantaHatShowing: true,
  },
};

export const WithIndicator: Story = {
  args: {
    avatar: AvatarImage01,
    indicator: "accepted",
  },
};
