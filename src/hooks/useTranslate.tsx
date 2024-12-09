"use client";
const useTranslate = () => {
  const translate = (en: string, ru: string) => {
    return en || ru;
  };
  return translate;
};

export default useTranslate;
