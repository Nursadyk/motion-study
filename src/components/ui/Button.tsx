import clsx from "clsx";
import React, { ReactNode } from "react";
interface Props {
  className?: string;
  type: "button" | "submit";
  children: ReactNode;
}
export const Button: React.FC<Props> = ({
  className,
  children,
  type = "button",
}) => {
  return (
    <button type={type} className={clsx("base-button", className)}>
      {children}
    </button>
  );
};
