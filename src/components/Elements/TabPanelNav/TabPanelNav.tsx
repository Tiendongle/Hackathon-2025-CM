import classNames from "classnames";
import { TabPanelProvider, useTabPanel } from "../../../hooks/useTabPanel";
import { isEmpty } from "../../../utils/helpers";

interface TabPanelNavProps extends React.PropsWithChildren {
  items: TabPanelNavItemsProp[];
}

interface TabPanelNavItemsProp {
  name: string;
  data?: unknown;
}

const TabNavClasses = "flex space-between";

const TabPanelNav = ({ items }: TabPanelNavProps) => {
  if (isEmpty(items)) throw new Error("Error: No Tabs defined");

  const { activePanel, setActivePanel } = useTabPanel();
  if (!activePanel && !isEmpty(items)) setActivePanel(items?.[0].name);

  return (
    <div className={TabNavClasses}>
      {!isEmpty(items) &&
        items.map((item) => <TabNavItem key={item?.name} {...item} />)}
    </div>
  );
};

const TabNavItem = ({ name }: TabPanelNavItemsProp) => {
  const { activePanel, setActivePanel } = useTabPanel();

  const handleClick = () => {
    setActivePanel(name);
  };

  const activeClass = "strong underline bg-gray-300";
  const tabNavItemClasses = classNames([
    activePanel === name && activeClass,
    "px-4 py-2 cursor-pointer hover:bg-gray-200",
  ]);

  return (
    <div className={tabNavItemClasses} onClick={handleClick}>
      {name}
    </div>
  );
};
export default TabPanelNav;
