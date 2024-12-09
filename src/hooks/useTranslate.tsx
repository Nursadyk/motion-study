"use client";
import { useAppSelector } from "@/redux/store";

const useTranslate = () => {
  const language = useAppSelector((s) => s.translate.lg);
  const translate = (en: string, ru: string) => {
    return language === "EN" ? en : ru;
  };
  return translate;
};

export default useTranslate;
