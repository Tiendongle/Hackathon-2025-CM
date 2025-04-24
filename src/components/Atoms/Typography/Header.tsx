interface HeaderProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}

const Header = ({ as, children, className }: HeaderProps) => {
  const Component = as || "h1";

  return <Component className={className}>{children}</Component>;
};

export default Header;
