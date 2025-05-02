import classNames from "classnames";
import { HTMLAttributes } from "react";

interface GroupDataShowcaseItemProps {
  itemData: { detail: React.ReactNode | string; title: string };
  hasDivider: boolean;
  isLastItem: boolean;
  variant: "class-detail" | "rating-detail";
}

interface GroupDataShowcase extends HTMLAttributes<HTMLElement> {
  data: { detail: React.ReactNode | string; title: string }[];
  variant: "class-detail" | "rating-detail";
}

export const variantList = {
  "class-detail": "flex justify-between",
  "rating-detail": "flex justify-between rounded-2xl bg-white py-4",
};
const GroupDataShowcase = ({ data, variant, className }: GroupDataShowcase) => {
  const hasDivider = variant === "rating-detail";
  return (
    <div className={classNames(variantList[variant], className)}>
      {data.map((item, index, arr) => (
        <GroupDataShowcaseItem
          itemData={item}
          hasDivider={hasDivider}
          isLastItem={arr.length - 1 === index}
          variant={variant}
        />
      ))}
    </div>
  );
};

const GroupDataShowcaseItem = ({
  itemData,
  hasDivider,
  isLastItem,
  variant,
}: GroupDataShowcaseItemProps) => {
  const dividerStyle = !isLastItem && "border-r";
  const detailVariantList = {
    "class-detail": "text-gray-900",
    "rating-detail": "text-theme-orange",
  };
  return (
    <div
      className={classNames(
        "flex flex-col justify-center items-center flex-auto",
        hasDivider && dividerStyle
      )}
    >
      <span className={classNames("text-lg", detailVariantList[variant])}>
        {itemData.detail}
      </span>
      <span className="text-gray-500 text-xs">{itemData.title}</span>
    </div>
  );
};

export default GroupDataShowcase;
