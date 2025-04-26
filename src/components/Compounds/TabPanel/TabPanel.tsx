import { useEffect, useState } from "react";

import useTabPanel, { TabPanelProvider } from "../../../hooks/useTabPanel";
import { TabPanelNav } from "../../../components/Elements/TabPanelNav";

interface TabPanelProps extends React.PropsWithChildren {
  data: TabPanelNavItemsProp[];
}

interface TabPanelNavItemsProp {
  name: string;
  data: any[];
}

// TODO: Determine if this component is needed.
// TabPanelNav - Is main component that render the Tabs.
// Using custom hook `useTabPanel` we can get and set the `activePanel`
//
// This TabPanel component is to show how we can get and set data that shows up.
// To be determined is how we display the data in the panel.
// Considerations: Should it just load and fetch data? Should we render component and that's where data is fetched?
//
// Tab Panel can be used in on Home screen and in Messages

const TabPanel = ({ data }: TabPanelProps) => {
  return (
    <TabPanelProvider>
      <TabPanelInner data={data} />
    </TabPanelProvider>
  );
};

const TabPanelInner = ({ data }: TabPanelProps) => {
  const { activePanel } = useTabPanel();
  const [currentData, setCurrentData] =
    useState<TabPanelNavItemsProp["data"]>();

  useEffect(() => {
    const dataIndex = data?.findIndex((item) => item?.name === activePanel);
    setCurrentData(data[dataIndex]?.data);
  }, [activePanel]);

  return (
    <>
      <TabPanelNav items={data} />

      {currentData && <div>{currentData.map((item) => item?.title)}</div>}
    </>
  );
};

export default TabPanel;
