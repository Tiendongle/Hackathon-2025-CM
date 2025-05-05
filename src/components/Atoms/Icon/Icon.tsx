import { iconMap, hobbiesIcon, HobbyIconName, IconName } from "./iconMap";

interface IconProps {
  iconName: IconName | HobbyIconName;
  className?: string;
}

const SvgIcon: React.FC<IconProps> = ({ iconName, className }) => {
  if (!iconName) return;
  const IconComponent = { ...iconMap, ...hobbiesIcon }[iconName];

  if (!IconComponent) throw new Error(`${iconName} does not exist!`);

  return <IconComponent className={className} />;
};

export default SvgIcon;
