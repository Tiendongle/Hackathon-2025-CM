import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: "boldBorder",
    children: "I am the content of a card",
    className: "w-96 gap-4 p-8 flex flex-col justify-self-center",
  },
};
