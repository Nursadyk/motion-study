"use client";
import { Container } from "@/components/shared";
import { Button } from "@/components/ui";
import useTranslate from "@/hooks/useTranslate";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const partners = [
  {
    name: {
      en: "Universities and higher education establishments.",
      ru: "Университеты и высшие учебные заведения.",
    },
  },
  {
    name: {
      en: "Private schools and colleges.",
      ru: "Частные школы и колледжи.",
    },
  },
  {
    name: {
      en: "State schools and colleges.",
      ru: "Государственные школы и колледжи.",
    },
  },
  {
    name: {
      en: "World known language schools for adults.",
      ru: "Мировые известные языковые школы для взрослых.",
    },
  },
  {
    name: {
      en: "International language schools for 7-18 y.o.schoolchildren",
      ru: "Мировые известные языковые школы для 7-18 летнего возраста.",
    },
  },
  {
    name: {
      en: "Business schools",
      ru: "Бизнес-школы.",
    },
  },
  {
    name: {
      en: "Executive centres",
      ru: "Экспертные центры.",
    },
  },
  {
    name: {
      en: "Summer camps",
      ru: "Летние курсы.",
    },
  },
  {
    name: {
      en: "Guardianship companies",
      ru: "Обучающие компании",
    },
  },
];
const StudyPage = () => {
  const translate = useTranslate();
  return (
    <section className="pt-16 pb-[100px]">
      <Container>
        <h1 className=" font-gilroyMedium text-[28px] md:text-[48px] text-titleText dark:text-white ">
          {translate(" Study Abroad", "Обучение за рубежом")}
        </h1>
        <hr className=" max-w-[96px] pb-[3px] border-[#6483F6] rounded-md mt-2 mb-[78px]" />
        <div className=" flex flex-col lg:flex-row justify-between items-center">
          <div>
            <div className=" mb-[98px] ">
              <Image
                src="/assets/images/study-hero.png"
                alt="study-img"
                width={370}
                height={480}
                layout="intrinsic"
                className="object-cover aspect-square md:aspect-auto"
              />
            </div>
          </div>
          <div className=" flex flex-col basis-[563px]">
            <p className="study-text mb-[85px] dark:text-slate-400">
              <span className=" font-gilroyMedium text-[21px] dark:text-white">
                Motion Study{" "}
              </span>
              {translate(
                "for International Education offers its clients various study abroad opportunities – language courses, secondary, professional and higher education, professional development programmes for teachers and specialists of companies and organizations.",
                "Motion study for International Education предлагает своим клиентам различные возможности обучения за рубежом – языковые курсы, среднее, профессиональное и высшее образование, программы повышения квалификации для преподавателей и специалистов компаний и организаций."
              )}
            </p>
            <h3 className=" text-[21px] font-gilroyMedium dark:text-white">
              {translate("Our partners include:", "Наши партнеры:")}
            </h3>
            <ul className=" mb-[51px] flex flex-col gap-y-2">
              {partners.map((partner, index) => (
                <li
                  className=" before:content-['-'] before:mr-2 study-text  dark:text-slate-400"
                  key={index}
                >
                  {translate(partner.name.en, partner.name.ru)}
                </li>
              ))}
            </ul>
            <Link href="/study/country" className=" self-center">
              <Button type="button">
                {translate("Explore", "Исследовать")}
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default StudyPage;
