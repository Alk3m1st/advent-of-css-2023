import type { Meta, StoryObj } from "@storybook/react";

import { PasswordFormField } from "../components/FormField";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/FormField",
  component: PasswordFormField,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof PasswordFormField>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Password: Story = {
  args: {
    label: "Password",
    name: "password",
  },
  // render: () => (
  //   <><form><FormField /></form></>
  // ),
};
