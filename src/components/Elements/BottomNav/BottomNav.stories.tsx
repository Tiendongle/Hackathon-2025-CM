import type { Meta, StoryObj } from "@storybook/react";

import BottomNav from "./BottomNav";

const meta: Meta<typeof BottomNav> = {
  component: BottomNav,
};

export default meta;
type Story = StoryObj<typeof BottomNav>;

export const Default: Story = {
  args: {
    // elements: [],
  },
};
