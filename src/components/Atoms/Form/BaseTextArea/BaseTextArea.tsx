import { InputHTMLAttributes } from "react";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {}

const BaseTextArea = ({ placeholder, ...rest }: TextAreaProps) => (
  <textarea placeholder={placeholder} {...rest} />
);

export default BaseTextArea;
