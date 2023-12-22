import type { Meta, StoryObj } from "@storybook/react";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Layout/AuthLayout",
  component: AuthLayout,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  // tags: ["autodocs"],
} satisfies Meta<typeof AuthLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Password: Story = {
  //   render: (args) => (
  //     <AuthLayout {...args}>
  //         <p>Testing</p>
  //     </AuthLayout>
  //   )
};
