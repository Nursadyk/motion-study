"use client";
import { Container, Title } from "@/components/shared";
import useTranslate from "@/hooks/useTranslate";
import React from "react";
import Image from "next/image";
import useFetch from "@/hooks/useFetch";

function Team() {
  const translate = useTranslate();
  const { data: studyData, loading } = useFetch<ourTeam[]>(
    "https://65ed686c0ddee626c9b197ce.mockapi.io/study"
  );
  return (
    <section className=" pb-[100px] md:pb-[213px]">
      <Container>
        <Title
          text={translate("Our Team", "Наша команда")}
          size="5xl"
          className="text-titleText text-left md:text-center pb-6 md:pb-[132px]"
        />
        {loading && <p className=" text-center text-xl">Loading...</p>}
        {studyData?.length === 0 && !loading && (
          <h1 className="text-2xl text-center">
            {translate(
              "No team members found 🙃",
              "Не найдено ни одного члена команды 🙃"
            )}
          </h1>
        )}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(315px,1fr))] gap-x-[115px] gap-y-6 md:gap-y-[78px] justify-items-center">
          {studyData?.map((team) => (
            <div
              key={team.id}
              className="max-w-[315px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <a href="#">
                <Image
                  className="rounded-t-lg"
                  src={team.avatar}
                  alt="our-team"
                  width={315}
                  height={309}
                  layout="intrinsic"
                />
              </a>
              <div className="p-5">
                <a href="#">
                  <Title
                    text={translate(team.name.en, team.name.ru)}
                    size="lg"
                    className="text-center mb-3 font-gilroyMedium"
                  />
                </a>
                <p className="mb-3 text-[#7B6AFF80] text-base dark:text-gray-400 text-center">
                  {translate(team.specialization.en, team.specialization.ru)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
export default Team;
