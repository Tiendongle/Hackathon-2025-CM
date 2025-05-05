import { ChangeEventHandler, useState } from "react";
import Icon, { HobbyIconName, IconName } from "../../Icon";
import { Paragraph } from "../../Typography";
import classNames from "classnames";

interface BaseDropdownProps extends ChangeEventHandler<HTMLSelectElement> {
  options: { label: string; value: string }[];
  onChange?: (option: { label: string; value: string }) => void;
  className?: string;
}

const BaseDropdown = ({ options, onChange, className }: BaseDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<{
    label: string;
    value: string;
  } | null>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = ({
    label,
    value,
  }: {
    label: string;
    value: string;
  }) => {
    setSelectedValue({ label, value });
    onChange && onChange({ label, value });
    setIsOpen(false);
  };

  return (
    <div className={classNames(["dropdown relative", className])}>
      <button onClick={handleToggle} className="w-full">
        <div className="flex items-center w-full">
          <Icon
            iconName={
              (selectedValue?.value || "all") as IconName | HobbyIconName
            }
          />

          <Paragraph className="px-2">
            {selectedValue?.label || "Type of hobby"}
          </Paragraph>
          <Icon iconName="chevron-down" className="justify-items-end" />
        </div>
      </button>
      {isOpen && (
        <ul className="absolute left-0 top-full w-full max-h-56 border overflow-x-hidden overflow-y-auto bg-white">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleOptionClick(option)}
              className="flex items-center px-2 hover:bg-neutral-200 transition-colors"
            >
              <Icon
                iconName={option.value as IconName | HobbyIconName}
                className="mr-2 my-2"
              />
              <Paragraph>{option.label}</Paragraph>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BaseDropdown;
