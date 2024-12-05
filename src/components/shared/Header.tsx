"use client";
import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import Navbar from "./Navbar";
import useWindowSize from "@/hooks/useWindowSize";
import { SearchItems } from "./SearchItems";
import ThemeSwitch from "./ThemeSwitch";
import { AlignJustify, X } from "lucide-react";
export const Header = () => {
  const [active, setActive] = React.useState(0);
  const [burger, setBurger] = React.useState(false);
  const { width } = useWindowSize();
  return (
    <header className=" py-6 shadow-md sticky top-0 left-0 z-50 bg-white dark:bg-slate-900 ring-1 dark:ring-slate-800">
      <Container className=" flex justify-between items-center">
        <div className=" flex items-center">
          <Image src="/assets/icons/logo.svg" alt="" width={61} height={29} />
        </div>
        <div className=" flex items-center space-x-[59px]">
          <Navbar
            active={active}
            setActive={setActive}
            type="header"
            className={!burger && width <= 768 ? "active" : ""}
            closeBurger={() => setBurger(false)}
          />
          <SearchItems type="desktop" />
          <div className=" flex gap-x-2">
            <select name="En" id="" className="hidden md:block">
              <option value="EN">EN</option>
            </select>
            <ThemeSwitch />
          </div>
          {width <= 768 && (
            <button onClick={() => setBurger((prev) => !prev)}>
              {!burger ? <AlignJustify size={30} /> : <X size={30} />}
            </button>
          )}
        </div>
      </Container>
    </header>
  );
};
