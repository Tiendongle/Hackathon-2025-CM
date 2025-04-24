import type { Meta, StoryObj } from "@storybook/react";

import BaseImage from "./BaseImage";

const meta: Meta<typeof BaseImage> = {
  component: BaseImage,
};

export default meta;
type Story = StoryObj<typeof BaseImage>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/200/300",
  },
};
