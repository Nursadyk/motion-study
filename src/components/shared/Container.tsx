import React, { ReactNode } from "react";
interface Props {
  className?: string;
  children: ReactNode;
}
export const Container: React.FC<React.PropsWithChildren<Props>> = ({
  className,
  children,
}) => {
  return (
    <div className={` mx-auto max-w-[1220px] px-5 ${className}`}>
      {children}
    </div>
  );
};
