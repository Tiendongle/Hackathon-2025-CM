import { iconMap, IconName } from "./iconMap";

interface IconProps {
  iconName: IconName;
  className?: string;
}

const SvgIcon: React.FC<IconProps> = ({ iconName, className }) => {
  const IconComponent = iconMap[iconName];

  if (!IconComponent) throw new Error(`${iconName} does not exist!`);

  return <IconComponent className={className} />;
};

export default SvgIcon;
