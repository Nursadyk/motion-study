import clsx from "clsx";
import { Search } from "lucide-react";
import React from "react";
interface Props {
  className?: string;
  type: "mobile" | "desktop";
}
export const SearchItems: React.FC<Props> = ({ type, className }) => {
  return (
    <form
      className={clsx({
        "block lg:hidden": type === "mobile",
        "hidden lg:block": type === "desktop",
      })}
    >
      <label className=" relative">
        <Search
          strokeWidth={2}
          className={clsx(
            "text-[#BBBBBB] absolute top-1/2 -translate-y-1/2 left-3",
            className
          )}
        />
        <input
          type="text"
          className={clsx("rounded-md border py-3 pl-10", {
            "w-full": type === "mobile",
          })}
          placeholder="Поиск..."
        />
      </label>
    </form>
  );
};
