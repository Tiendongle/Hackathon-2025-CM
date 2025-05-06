import { Paragraph } from "../../../components/Atoms/Typography";
import { IconName } from "../../../components/Atoms/Icon";
import SvgIcon from "../../../components/Atoms/Icon";
import { Link } from "../../../components/Atoms/Link";
import useTabPanel, { TabPanelProvider } from "~/hooks/useTabPanel";
import classNames from "classnames";
import { useLocation } from "@tanstack/react-router";

interface BottomNavProps {
  elements: BottomNavDataProps;
}

interface GroupedBottomNavItemProps {
  group: BottomNavItemProps[];
}

interface BottomNavItemProps {
  name: string;
  route: string;
  icon: IconName;
}
export type BottomNavDataProps = (
  | GroupedBottomNavItemProps
  | BottomNavItemProps
)[];
const MockElements: BottomNavDataProps = [
  { name: "home", route: "/", icon: "home" },
  {
    group: [
      { name: "learn", route: "/requests", icon: "learn" },
      { name: "mentor", route: "/class", icon: "mentor" },
    ],
  },
  { name: "inbox", route: "/messages", icon: "inbox" },
];

const BottomNav = ({ elements = MockElements, ...rest }: BottomNavProps) => {
  return (
    <TabPanelProvider>
      <div className="w-full max-w-[400px] mx-auto  flex justify-between bg-white py-4">
        <BottomNavItems elements={elements} />
      </div>
    </TabPanelProvider>
  );
};

function BottomNavItems({ elements }: { elements: BottomNavDataProps }) {
  return elements.map((element) => {
    if (element.hasOwnProperty("group"))
      return (
        <span className="w-1/2 mx-2 px-1 py-0.5 -my-2.5 flex flex-row h-full items-center justify-around bg-gray-200 rounded-2xl shadow-inner shadow-slate-300  *:px-2 *:py-2 *:rounded-2xl">
          <BottomNavItems
            elements={(element as GroupedBottomNavItemProps).group}
          />
        </span>
      );

    return <BottomNavItem {...(element as BottomNavItemProps)} />;
  });
}

function BottomNavItem({ route, icon, name }: BottomNavItemProps) {
  const { activePanel, setActivePanel } = useTabPanel();

  const location = useLocation();
  const pathname = location.pathname;

  if (route === pathname) setActivePanel(name);

  return (
    <Link
      to={route}
      className={classNames([
        activePanel === name && "bg-white text-accent",
        "mx-1 my-1 flex-grow flex flex-col items-center hover:text-accent transition-colors hover:duration-150 duration-500",
      ])}
    >
      <>
        <SvgIcon iconName={icon} />
        <Paragraph variant="caption">{name}</Paragraph>
      </>
    </Link>
  );
}
export default BottomNav;
