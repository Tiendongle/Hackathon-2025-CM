import type { Meta, StoryObj } from "@storybook/react";

import Card, { variantList } from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: Object.keys(variantList),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    variant: "boldBorder",
    children: "I am the content of a card",
    className: "w-96 gap-4 p-8 flex flex-col justify-self-center",
  },
  render: (arg) => (
    <div className="flex flex-col w-fit items-center">
      <div className="flex flex-col  justify-center items-center py-5 w-52 aspect-square">
        <Card className="w-full h-full" {...arg} />
      </div>
      <div className="flex justify-center items-center flex-col">
        {Object.keys(variantList).map((type) => (
          <span className="flex flex-col items-center px-2 mt-6">
            <Card
              variant={type as keyof typeof variantList}
              children="I am the content of a card"
              className="w-96 gap-4 p-8 flex flex-col justify-self-center"
            />
            <p>{type}</p>
          </span>
        ))}
      </div>
    </div>
  ),
};
