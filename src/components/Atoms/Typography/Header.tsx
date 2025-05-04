import classNames from "classnames";
import { HTMLAttributes, PropsWithChildren } from "react";

interface HeaderProps
  extends PropsWithChildren<HTMLAttributes<HTMLHeadingElement>> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className: string;
}

const defaultClassnames = {
  default: `font-medium`,
  h1: ``,
  h2: ``,
  h3: ``,
  h4: ``,
  h5: ``,
  h6: ``,
};

const Header = ({ as, children, className, ...rest }: HeaderProps) => {
  const Component = as || "h1";

  return (
    <Component
      className={classNames([
        defaultClassnames.default,
        as && defaultClassnames[as],
        className,
      ])}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Header;
