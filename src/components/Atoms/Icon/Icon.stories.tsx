import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";
import { iconMap, IconName } from "./iconMap";

const meta: Meta<typeof Icon> = {
  component: Icon,
  argTypes: {
    iconName: {
      control: { type: "select" },
      options: Object.keys(iconMap),
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    iconName: "plus",
  },
  render: (arg) => (
    <div className="flex flex-col w-fit items-center">
      <div className="flex flex-col  justify-center items-center py-5 w-52 aspect-square">
        <Icon className="w-full h-full" {...arg} />
      </div>
      <div className="flex justify-center items-center">
        {Object.keys(iconMap).map((type) => (
          <span className="flex flex-col items-center px-2">
            <Icon iconName={type as IconName} />
            <p>{type}</p>
          </span>
        ))}
      </div>
    </div>
  ),
};
