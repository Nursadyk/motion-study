"use client";
import clsx from "clsx";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
interface Props {
  className?: string;
  type: "mobile" | "desktop";
}
const options = ["Study USA", "Study Japan"];
export const SearchItems: React.FC<Props> = ({ type, className }) => {
  const router = useRouter();
  const handleChoose = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.split(" ")[1];
    if (options.includes(e.target.value)) {
      router.push(`/study/country/${value}`);
    } else {
      setTimeout(() => router.push(`/study/country/${e.target.value}`), 3000);
    }
  };
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
          list="wishlist"
          className={clsx("rounded-md border py-3 pl-10", {
            "w-full": type === "mobile",
          })}
          placeholder="Поиск..."
          onChange={handleChoose}
        />
        <datalist id="wishlist">
          {options.map((option, index) => (
            <option key={index} value={option} />
          ))}
        </datalist>
      </label>
    </form>
  );
};
