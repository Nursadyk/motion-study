"use client";
import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import Navbar from "./Navbar";
import useWindowSize from "@/hooks/useWindowSize";
import { SearchItems } from "./SearchItems";
import ThemeSwitch from "./ThemeSwitch";
import { AlignJustify, X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "../../lib/store";
import { switchLanguage } from "@/lib/futures/useTranslateSlice";
import { usePathname } from "next/navigation";
export const Header = () => {
  const [active, setActive] = React.useState(0);
  const [burger, setBurger] = React.useState(false);
  const { width } = useWindowSize();
  const path = usePathname();
  const language = useAppSelector((s) => s.translate?.lg || "EN");
  const dispatch = useAppDispatch();
  function switchLanguages(e: React.ChangeEvent<HTMLSelectElement>) {
    if (e.target.value === "EN") {
      dispatch(switchLanguage(e.target.value));
      localStorage.setItem("selected", "EN");
    } else if (e.target.value === "RU") {
      dispatch(switchLanguage(e.target.value));
      localStorage.setItem("selected", "RU");
    }
  }
  React.useEffect(() => {
    const selectedLanguage = localStorage.getItem("selected");
    if (selectedLanguage) {
      dispatch(switchLanguage((selectedLanguage as "RU") || "EN"));
    } else {
      dispatch(switchLanguage("EN"));
    }
    window.addEventListener("storage", (e) => {
      if (e.key === "selected") {
        dispatch(switchLanguage((e.newValue as "EN") || "RU"));
      }
    });
    return () => {
      window.removeEventListener("storage", (e) => {
        if (e.key === "selected") {
          dispatch(switchLanguage((e.newValue as "EN") || "RU"));
        }
      });
    };
  }, []);
  React.useEffect(() => {
    switch (path) {
      case "/":
        setActive(0);
        break;
      case "/about":
        setActive(1);
        break;
      case "/study":
        setActive(2);
        break;
      default:
        break;
    }
  }, []);
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
            <select
              onChange={switchLanguages}
              name="En"
              id=""
              className="hidden md:block dark:bg-slate-900"
            >
              <option value="EN">{language === "RU" ? "RU" : "EN"}</option>
              <option value="RU">{language === "EN" ? "EN" : "RU"}</option>
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
