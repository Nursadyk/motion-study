"use client";
import React from "react";
import useFetch from "@/hooks/useFetch";
import { Container } from "../shared";
import Categories from "../shared/Categories";
import { useParams } from "next/navigation";
import Image from "next/image";
import useTranslate from "@/hooks/useTranslate";
import { MapPin } from "lucide-react";
import Link from "next/link";
const CountryDetail = () => {
  const { countryIdPath } = useParams();
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
  const { data: countryData, loading } = useFetch<IUniverse[]>(
    "https://65ed686c0ddee626c9b197ce.mockapi.io/univer"
  );
  const handleSelection = (category: string, value: string | null) => {
    setSelectedItems!((prev) => ({
      ...prev,
      [category]:
        prev[category as keyof typeof selectedItems] === value ? null : value,
    }));
  };
  const removeDuplicate = countryData?.filter(
    (el, index, array) => index === array.findIndex((d) => d.id === el.id)
  );
  const filteredData = React.useMemo(() => {
    return removeDuplicate?.filter((item) => {
      const countryMatch =
        !selectedItems!.country || item.country.en === selectedItems!.country;
      const specializationMatch =
        !selectedItems!.specialization ||
        item.specialization.some(
          (spec) => spec.en === selectedItems!.specialization
        );
      const higherEducationMatch =
        !selectedItems!.higherEducation ||
        item.name.en === selectedItems!.higherEducation;
      return countryMatch && specializationMatch && higherEducationMatch;
    });
  }, [countryData, selectedItems]);
  React.useEffect(() => {
    setSelectedItems((prev) => ({
      ...prev,
      country: decodeURI(String(countryIdPath)),
      specialization: null,
      higherEducation: null,
    }));
  }, []);
  return (
    <section>
      <Container>
        <Categories
          title={filteredData ? filteredData?.map((e) => e.country.en)[0] : ""}
          selectedItems={selectedItems}
          handleSelection={handleSelection}
          data={countryData!}
          type="countryDetail"
        />
        {loading && <p>Loading...</p>}
        <div className=" flex flex-col gap-[31px]">
          {filteredData?.map((items) => {
            return (
              <Link
                href={`/study/universe/${items.id}`}
                key={items.id}
                className=" flex items-center justify-between shadow-md  cursor-pointer pr-[119px]"
              >
                <div className=" flex items-center gap-x-[61px]">
                  <Image
                    className=" rounded-lg max-h-[161px]"
                    src={items.name.png}
                    alt="universe-img"
                    width={231}
                    height={161}
                    layout="intrinsic"
                  />
                  <div>
                    <h3>Name:</h3>
                    <p>{translate(items.name.en, items.name.ru)}</p>
                  </div>
                </div>
                <div className=" flex gap-[151px]">
                  <div>
                    <p className=" flex text-xl text-[#B5B5B5]">
                      Location <MapPin />
                    </p>
                    <h3>{translate(items.location.en, items.location.ru)}</h3>
                  </div>
                  <div>
                    <p className=" flex text-xl text-[#B5B5B5]">
                      Age <MapPin />
                    </p>
                    <h3>From 16</h3>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default CountryDetail;
