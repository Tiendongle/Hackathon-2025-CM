import type { Meta, StoryObj } from "@storybook/react";

import BaseDropdown from "./BaseDropdown";
import { iconMap, IconName } from "../../Icon/iconMap";

const meta: Meta<typeof BaseDropdown> = {
  component: BaseDropdown,
  args: {
    options: Object.keys(iconMap).map((key) => ({
      label: key,
      value: key as IconName,
    })),
  },
};

export default meta;

type Story = StoryObj<typeof BaseDropdown>;

export const Default: Story = {};
