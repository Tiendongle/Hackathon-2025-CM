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
    <header className="sticky top-0 py-4 bg-white mb-4 z-10">
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
