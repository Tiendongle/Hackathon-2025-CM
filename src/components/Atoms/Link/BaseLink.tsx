import { Link } from "@tanstack/react-router";

interface LinkProps {
  to: string;
  className?: string;
  children: React.ReactNode;
  activeProps?: {
    className?: string;
  };
}

const BaseLink = ({ to, className, children, activeProps }: LinkProps) => (
  <Link to={to} className={className} activeProps={activeProps}>
    {children}
  </Link>
);

export default BaseLink;
