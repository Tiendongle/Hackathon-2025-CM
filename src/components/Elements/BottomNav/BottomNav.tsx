import { Paragraph } from "../../../components/Atoms/Typography";
import { IconName } from "../../../components/Atoms/Icon";
import SvgIcon from "../../../components/Atoms/Icon";
import { Link } from "../../../components/Atoms/Link";

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
  { name: "Home", route: "/", icon: "home" },
  {
    group: [
      { name: "Requests", route: "/requests", icon: "request" },
      { name: "Classes", route: "/class", icon: "classes" },
    ],
  },
  { name: "Messages", route: "/messages", icon: "inbox" },
];

const BottomNav = ({ elements = MockElements, ...rest }: BottomNavProps) => {
  return (
    <div className="w-full max-w-[400px] mx-auto  flex justify-between h-50 bg-white py-4">
      <BottomNavItems elements={elements} />
    </div>
  );
};

function BottomNavItems({ elements }: { elements: BottomNavDataProps }) {
  return elements.map((element) => {
    if (element.hasOwnProperty("group"))
      return (
        <span className="w-1/2 mx-2 px-1 py-0.5 -my-2.5 flex flex-row h-full items-center justify-around bg-gray-200 rounded-2xl shadow-inner shadow-slate-300 hover:*:bg-white *:px-2 *:py-2 *:rounded-2xl">
          <BottomNavItems
            elements={(element as GroupedBottomNavItemProps).group}
          />
        </span>
      );

    return <BottomNavItem {...(element as BottomNavItemProps)} />;
  });
}

function BottomNavItem({ route, icon, name }: BottomNavItemProps) {
  return (
    <Link
      to={route}
      className="mx-1 my-1 flex flex-col items-center hover:text-accent transition-colors hover:duration-150 duration-500"
    >
      <>
        <SvgIcon iconName={icon} />
        <Paragraph variant="caption">{name}</Paragraph>
      </>
    </Link>
  );
}
export default BottomNav;
