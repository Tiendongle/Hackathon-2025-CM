import { ImgHTMLAttributes } from "react";

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

const BaseImage = ({ src, className, ...rest }: ImageProps) => (
  <img src={src} className={className} {...rest} />
);

export default BaseImage;
