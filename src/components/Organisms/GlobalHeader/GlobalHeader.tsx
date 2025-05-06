import Icon from "~/components/Atoms/Icon";

interface GlobalHeaderProps {
  headerDetails: {
    header: string;
    pathName: string;
  };
}

const GlobalHeader = ({ headerDetails }: GlobalHeaderProps) => {
  const { header } = headerDetails;
  return (
    <header className="py-4  bg-white">
      <div className="w-11/12 m-auto flex justify-between">
        <div>
          <Icon iconName="profile" />
        </div>
        <span>{header}</span>
        <div className="flex">
          <Icon iconName="heart" />
          <Icon iconName="notifications" />
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
