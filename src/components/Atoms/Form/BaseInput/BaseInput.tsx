import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const BaseInput = ({ placeholder, ...rest }: InputProps) => (
  <input placeholder={placeholder} {...rest} />
);

export default BaseInput;
