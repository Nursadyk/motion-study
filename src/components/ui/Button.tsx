import clsx from "clsx";
import React, { ReactNode } from "react";
interface Props {
  className?: string;
  type: "button" | "submit";
  children: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
export const Button: React.FC<Props> = ({
  className,
  children,
  type = "button",
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx("base-button", className)}
    >
      {children}
    </button>
  );
};
