import React from "react";
interface Props {
  text: string;
  size?: "sm" | "md" | "lg" | "xl" | "2xl" | "5xl";
  className?: string;
}
export const Title: React.FC<Props> = ({ text, size = "sm", className }) => {
  const mapTagBySize = {
    sm: "h1",
    md: "h2",
    lg: "h3",
    xl: "h4",
    "2xl": "h5",
    "5xl": "h2",
  } as const;
  const mapClassNameBySize = {
    sm: "text-4xl md:text-6xl",
    md: "text-2xl",
    lg: "text-xl",
    xl: "text-lg",
    "2xl": "text-base",
    "5xl": "text-3xl md:text-5xl",
  } as const;
  return React.createElement(
    mapTagBySize[size],
    { className: `${mapClassNameBySize[size]} ${className}` },
    text
  );
};
