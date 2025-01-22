"use client";
import { Container, Title } from "@/components/shared";
import useFetch from "@/hooks/useFetch";
import useTranslate from "@/hooks/useTranslate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Categories from "../shared/Categories";

const CountryPage = () => {
  const translate = useTranslate();
  const [selectedItems, setSelectedItems] = React.useState<{
    country: string | null;
    specialization: string | null;
    higherEducation: string | null;
  }>({
    country: null,
    specialization: null,
    higherEducation: null,
  });
  const { data: universeData, loading } = useFetch<IUniverse[]>(
    "https://65ed686c0ddee626c9b197ce.mockapi.io/univer"
  );
  const removeDuplicates = universeData?.filter(
    (u, index, array) =>
      index === array.findIndex((el) => el.country.en === u.country.en)
  );
  const handleSelection = (category: string, value: string | null) => {
    setSelectedItems((prev) => ({
      ...prev,
      [category]:
        prev[category as keyof typeof selectedItems] === value ? null : value,
    }));
  };
  return (
    <section className=" md:pt-[99px] md:pb-[313px]">
      <Container>
        <Categories
          data={universeData!}
          title="Choose the country"
          selectedItems={selectedItems}
          handleSelection={handleSelection}
          type="countryPage"
        />
        <p>{loading && "...loading"}</p>
        <div className=" grid grid-cols-[repeat(auto-fit,minmax(235px,1fr))] gap-x-[75px] gap-y-[65px]">
          {removeDuplicates?.length !== 0 &&
            removeDuplicates?.map((country, i) => (
              <Link
                href={`/study/country/${country.country.en}`}
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
              </Link>
            ))}
        </div>
      </Container>
    </section>
  );
};

export default CountryPage;
