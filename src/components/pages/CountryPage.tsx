"use client";
import { Container, Title } from "@/components/shared";
import useFetch from "@/hooks/useFetch";
import useTranslate from "@/hooks/useTranslate";
import Image from "next/image";
import React from "react";

const CountryPage = () => {
  const translate = useTranslate();
  const { data: universeData } = useFetch<IUniverse[]>(
    "https://65ed686c0ddee626c9b197ce.mockapi.io/univer"
  );
  return (
    <section className=" md:pt-[100px] md:pb-[313px]">
      <Container>
        <h1 className=" font-gilroyMedium md:text-[48px] md:mb-11">
          {translate("Choose the country", "Выберите страну")}
        </h1>
        <div className=" grid grid-cols-[repeat(auto-fit,minmax(235px,1fr))] gap-x-[75px] gap-y-[65px]">
          {universeData
            ?.filter((c, i, self) => self.indexOf(c) === i)
            ?.map((country, i) => (
              <div
                key={i}
                className=" flex flex-col items-center px-8 pt-6 rounded-lg shadow-xl dark:shadow-sm dark:shadow-slate-950 cursor-pointer "
              >
                <Image
                  src={country.country.flag}
                  alt="country-image"
                  width={170}
                  height={170}
                  className=" w-[172px] h-[172px] rounded-full object-cover"
                />
                <Title
                  text={translate(country.country.en, country.country.ru)}
                  className=" pt-5 pb-12 font-normal"
                  size="md"
                />
              </div>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default CountryPage;
