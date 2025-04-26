import type { Meta, StoryObj } from "@storybook/react";

import TabPanelNav from "./TabPanelNav";
import { TabPanelProvider } from "../../../hooks/useTabPanel";
import { MockTabPanelData } from "../../../mocks/storyMocks/mockTabPanel";

const meta: Meta<typeof TabPanelNav> = {
  title: "Components/Tab Panel/Tab Panel Nav",
  component: TabPanelNav,
  decorators: (Story) => {
    return (
      <TabPanelProvider>
        <Story />
      </TabPanelProvider>
    );
  },
};

export default meta;
type Story = StoryObj<typeof TabPanelNav>;

export const Default: Story = {
  args: {
    items: MockTabPanelData,
  },
};

export const NoItems: Story = {
  args: {
    items: [],
  },
};
