import classNames from "classnames";
import { useTabPanel } from "../../../hooks/useTabPanel";
import { isEmpty } from "../../../utils/helpers";
import { useRouter } from "@tanstack/react-router";

interface TabPanelNavProps extends React.PropsWithChildren {
  items: TabPanelNavItemsProp[];
  className?: string;
  active?: TabPanelNavItemsProp["name"];
}

interface TabPanelNavItemsProp {
  name: string;
  data?: { [key: string]: string };
}

const TabNavClasses =
  "w-full flex gap-1 p-1 bg-gray-200 justify-around rounded-2xl text-sm font-medium";

const TabPanelNav = ({ items, className, active }: TabPanelNavProps) => {
  if (isEmpty(items)) throw new Error("Error: No Tabs defined");

  const { activePanel, setActivePanel } = useTabPanel();
  if (!activePanel && !isEmpty(items))
    setActivePanel(active || items?.[0].name);

  return (
    <div className={classNames([TabNavClasses, className])}>
      {!isEmpty(items) &&
        items.map((item) => <TabNavItem key={item?.name} {...item} />)}
    </div>
  );
};

const TabNavItem = ({ name, data }: TabPanelNavItemsProp) => {
  const router = useRouter();
  const { activePanel, setActivePanel } = useTabPanel();

  const handleClick = () => {
    setActivePanel(name);
    if (data?.hasOwnProperty("route")) router.navigate({ to: data.route });
  };

  const activeClass = "strong bg-white text-accent";
  const tabNavItemClasses = classNames([
    "px-4 py-2.5 flex-grow text-center cursor-pointer transition-colors rounded-xl hover:text-accent",
    activePanel === name && activeClass,
    activePanel === name && "active",
  ]);

  return (
    <div className={tabNavItemClasses} onClick={handleClick}>
      {name}
    </div>
  );
};
export default TabPanelNav;
