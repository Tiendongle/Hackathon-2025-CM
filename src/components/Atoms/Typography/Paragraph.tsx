import classNames from "classnames";
import { HTMLAttributes, PropsWithChildren } from "react";

interface ParagraphProps
  extends PropsWithChildren<HTMLAttributes<HTMLParagraphElement>> {
  variant: keyof typeof variantList;
}

const variantList = {
  default: "",
  bold: "",
  caption: "",
};

const Paragraph = ({
  children,
  variant,
  className,
  ...rest
}: ParagraphProps) => {
  return (
    <p className={classNames(variantList[variant], className)} {...rest}>
      {children}
    </p>
  );
};

export default Paragraph;
