import Icon from "~/components/Atoms/Icon";
import { type IconName } from "~/components/Atoms/Icon/iconMap";

interface TitleWithIconProps {
  title: string;
  iconName: IconName;
}

const TitleWithIcon = ({ title, iconName }: TitleWithIconProps) => {
  return (
    <div className="flex justify-start items-center text-lg gap-1">
      <Icon iconName={iconName} /> <span>{title}</span>
    </div>
  );
};

export default TitleWithIcon;
