import { ReactNode } from "react";
interface ButtonProps {
  className?: string;
  children?: ReactNode;
  primary?: boolean;
  secondary?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

const Button = ({
  className,
  children,
  primary,
  secondary,
  type,
  onClick,
  ...restProps
}: ButtonProps) => {
  return (
    <button
      className={`flex justify-center items-center rounded-md cursor-pointer text-sm h-[43px] py-3 px-9 disabled:cursor-no-drop disabled:bg-disabled disabled:text-[#999] font-semibold ${
        className && `${className}`
      } ${primary && "bg-primary text-white hover:bg-secondary"} ${
        secondary && "bg-white text-primary hover:bg-white"
      }`}
      type={type}
      onClick={onClick}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
