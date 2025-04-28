import { IconName } from "../../Icon/iconMap";
import SvgIcon from "../../Icon";

interface BottomNavProps {
  elements: any[];
}

interface BottomNavItemProps {
  name: string;
  route: string;
  icon: IconName;
}

const MockElements: BottomNavItemProps[] = [
  { name: "Home", route: "/", icon: "home" },
  { name: "Classes", route: "/class", icon: "calendar-star" },
  { name: "Requests", route: "/requests", icon: "plus" },
  { name: "Messages", route: "/messages", icon: "inbox-full" },
];

const BottomNav = ({ elements = MockElements, ...rest }: BottomNavProps) => {
  console.log({ elements });
  return (
    <div className="w-full flex justify-between h-50">
      {elements.map((element) => (
        <span>
          <SvgIcon iconName={element.icon} />
        </span>
      ))}
    </div>
  );
};

export default BottomNav;
