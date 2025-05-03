import { HTMLAttributes } from "react";
import classNames from "classnames";

const Divider = ({ className }: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={classNames(
        "border-gray-200 border-b m-auto w-full",
        className
      )}
    ></div>
  );
};

export default Divider;
