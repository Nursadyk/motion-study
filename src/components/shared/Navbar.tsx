import React from "react";
import { navbar } from "../../../public/assets/const";
import clsx from "clsx";
import Link from "next/link";
import { Instagram, PhoneCall, Send, Mail } from "lucide-react";
const icons = [
  { Component: Send, key: "send" },
  { Component: Instagram, key: "instagram" },
  { Component: PhoneCall, key: "phoneCall" },
  { Component: Mail, key: "mail" },
];
interface Props {
  active?: number;
  setActive: (active: number) => void;
  type: string;
  className?: string;
}
const Navbar: React.FC<Props> = ({ active, setActive, type, className }) => {
  return (
    <div
      className={clsx("overlay", className, [
        "absolute top-full bg-blue-100 w-full min-h-screen dark:bg-slate-900 left-0 md:relative md:min-h-0",
        type === "header" && "md:bg-white",
        type === "footer" &&
          "hidden md:flex md:justify-center md:bg-[#121212] dark:bg-[#121212]",
      ])}
    >
      <ul
        className={`flex flex-col pl-12 pt-20 md:p-0 md:flex-row  md:items-center ${
          type === "header" ? "gap-[35px]" : "space-x-[65px]"
        }`}
      >
        {navbar.map((item, i) => {
          return (
            <li
              key={i}
              onClick={() => setActive(i)}
              className={clsx("relative navbar-content", {
                active: active === i && type !== "footer",
              })}
            >
              <Link href={item.href} className="text-xl md:text-base">
                {item.title}
              </Link>
            </li>
          );
        })}
        <div className=" flex space-x-[18px] md:hidden">
          <button className="translate-button">EN</button>
          <button className="translate-button">RU</button>
          <button className="translate-button">KG</button>
        </div>
        <div className=" flex space-x-9 md:hidden">
          {icons.map(({ Component, key }) => (
            <Component
              key={key}
              strokeWidth={1}
              color="white"
              fill="black"
              size={38}
              className="cursor-pointer"
            />
          ))}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
