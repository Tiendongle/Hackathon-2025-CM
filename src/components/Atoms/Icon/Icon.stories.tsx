import type { Meta, StoryObj } from "@storybook/react";

import Icon from "./Icon";
import { hobbiesIcon, HobbyIconName, iconMap, IconName } from "./iconMap";

const meta: Meta<typeof Icon> = {
  component: Icon,
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    iconName: "plus",
  },
  argTypes: {
    iconName: {
      control: { type: "select" },
      options: Object.keys(iconMap),
    },
  },
  render: (arg) => (
    <div className="flex flex-col w-fit items-center">
      <div className="flex flex-col  justify-center items-center py-5 w-52 aspect-square">
        <Icon className="w-full h-full" {...arg} />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {Object.keys(iconMap).map((type) => (
          <span className="flex flex-col items-center p-2">
            <Icon iconName={type as IconName} />
            <p>{type}</p>
          </span>
        ))}
      </div>
    </div>
  ),
};

export const Hobbies: Story = {
  args: {
    iconName: "all",
  },
  argTypes: {
    iconName: {
      control: { type: "select" },
      options: Object.keys(hobbiesIcon),
    },
  },
  render: (arg) => (
    <div className="flex flex-col w-fit items-center">
      <div className="flex flex-col  justify-center items-center py-5 w-52 aspect-square">
        <Icon className="w-full h-full" {...arg} />
      </div>
      <div className="flex flex-wrap justify-center items-center">
        {Object.keys(hobbiesIcon).map((type) => (
          <span className="flex flex-col items-center p-2">
            <Icon iconName={type as HobbyIconName} />
            <p>{type}</p>
          </span>
        ))}
      </div>
    </div>
  ),
};
