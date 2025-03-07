import { MouseEvent } from "react";

interface iconProps {
  name:
    | string
    | {
        [key: number]: string;
      }
    | undefined;
  className?: string;
  color?: string;
  rectColor?: string;
  fillColor?: string;
  size?: string;
  width?: string;
  height?: string;
  onClick?: (
    e?: MouseEvent<HTMLSpanElement>
  ) => void | Promise<void> | undefined;
}

const Icon = ({
  name,
  className,
  color,
  rectColor,
  fillColor,
  size,
  width,
  height,
  onClick,
  ...restProps
}: iconProps) => {
  if (name === "" || color === "") {
    return null;
  }

  //eslint-disable-next-line @typescript-eslint/no-require-imports
  const Image = require(`./stock/${name}`).default;

  if (Image) {
    return (
      <span className={`flex ${className}`} onClick={onClick}>
        <Image
          aria-label={name}
          color={color}
          rectColor={rectColor}
          fillColor={fillColor}
          size={size}
          width={width}
          height={height}
          {...restProps}
        />
      </span>
    );
  }
  return null;
};

export default Icon;
