"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";
import { Moon, Sun } from "lucide-react";
const ThemeSwitch = () => {
  const [mounted, setMounted] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  React.useEffect(() => setMounted(true), []);
  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
        title="Loading Light/Dark Toggle"
      />
    );
  if (resolvedTheme === "dark") {
    return (
      <Sun
        strokeWidth={2}
        onClick={() => setTheme("light")}
        className=" cursor-pointer hover:p-1 hover:rounded-full"
      />
    );
  }
  if (resolvedTheme === "light") {
    return (
      <Moon
        strokeWidth={2}
        onClick={() => setTheme("dark")}
        className=" cursor-pointer"
      />
    );
  }
};
export default ThemeSwitch;
