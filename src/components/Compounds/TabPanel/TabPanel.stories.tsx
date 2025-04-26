import type { Meta, StoryObj } from "@storybook/react";

import TabPanel from "./TabPanel";
import { MockTabPanelData } from "../../../mocks/storyMocks/mockTabPanel";

const meta: Meta<typeof TabPanel> = {
  title: "Components/Tab Panel/Tab Panel",
  component: TabPanel,
};

export default meta;
type Story = StoryObj<typeof TabPanel>;

export const Default: Story = {
  args: {
    data: MockTabPanelData,
  },
};

export const NoItems: Story = {
  args: {},
};
