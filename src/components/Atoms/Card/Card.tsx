import classNames from "classnames";
import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  variant?: keyof typeof variantList;
  className?: string;
}

export const variantList = {
  boldBorder: "border-2 rounded-lg border-boldBorder",
  lightBorder: "border-2 rounded-lg border-lightBorder",
};

const Card = ({ children, variant, className, ...rest }: CardProps) => {
  return (
    <div
      className={classNames(variant && variantList[variant], className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
