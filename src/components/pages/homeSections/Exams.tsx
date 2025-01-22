"use client";
import { Container, Title } from "@/components/shared";
import React from "react";
import { exams } from "../../../constants/const";
import useWindowSize from "@/hooks/useWindowSize";
import Link from "next/link";
import Image from "next/image";
import useTranslate from "@/hooks/useTranslate";
function Exams() {
  const { width } = useWindowSize();
  const translate = useTranslate();
  return (
    <section className="pb-[124px] md:pb-[204px]">
      <Container>
        <h2 className="text-[28px] text-titleText dark:text-white md:text-[48px] font-gilroyMedium md:text-center">
          {translate("Exams", "Экзамены")}
        </h2>
        <p className="mt-6 mb-10 md:text-center max-w-[675px] md:ml-auto md:mr-auto text-varText dark:text-slate-400">
          {translate(
            "Exams are tests that assess a persons knowledge, skills, aptitude, or other qualifications in a specific subject or area of study. They are used to evaluate academic performance.",
            "Экзамены - это тесты, которые оценивают уровень знаний, навыков, умения или другие качества человека в определенной области обучения. Они используются для оценки успеваемости."
          )}
        </p>
        <div className=" grid grid-cols-1 lg:grid-cols-2 justify-items-center xl:justify-items-stretch">
          {/* left side*/}
          <div className=" rounded-md overflow-hidden h-fit shadow-lg dark:ring-1 dark:ring-slate-900/5 max-w-[466px] mb-11 md:mb-0">
            <div>
              <Image
                src="/assets/images/exams-image-zero.png"
                alt="image not found"
                layout="intrinsic"
                width={466}
                height={327}
              />
            </div>
            <div className="pl-4">
              <Title
                text={translate(
                  "Cambrige English Exams",
                  "«Кембриджские экзамены по английскому языку»"
                )}
                size="2xl"
                className=" text-darkBlue text-sm font-gilroyBold"
              />
              <Title
                text={translate(
                  "Your path to learning English, step by step.",
                  "Ваш путь к изучению английского языка, шаг за шагом."
                )}
                size="2xl"
                className="text-[#001254] pt-[10px] pb-[5px] md:py-[13px]"
              />
              <p className=" text-xs font-normal max-w-[375px]">
                {translate(
                  `Cambridge English Qualifications are in-depth exams that make
               learning English enjoyable, effective and rewarding. ${
                 width < 768
                   ? ".."
                   : " Our qualifications are based on research into effective teaching and learning."
               }`,
                  `Квалификации Cambridge English — это углубленные экзамены,
                  которые делают изучение английского языка приятным, эффективным
                  и полезным. ${
                    width < 768
                      ? ".."
                      : "Наши квалификации основаны на исследованиях вобласти эффективного преподавания и обучения."
                  }`
                )}
              </p>
              <Link
                href="/"
                className=" inline-block text-lightBlue text-xs md:text-sm w-full text-center pt-[13px] pb-4"
              >
                Discover more
              </Link>
            </div>
          </div>
          {/* right side*/}
          <div className=" flex flex-col gap-y-[19px]">
            {exams.map((exam) => (
              <div
                key={exam.id}
                className=" border dark:border-0 rounded-md md:py-[18px] md:pl-6 flex flex-col items-center md:flex-row  gap-y-[13px] md:gap-[22px] dark:bg-slate-800"
              >
                <img
                  src={exam.image}
                  alt="exam-image"
                  className="object-cover object-top w-full md:h-full h-[121px] sm:w-fit sm:h-fit"
                />

                <div className=" px-4 pb-[19px] pt-[13px] md:pb-0 md:pt-0">
                  <h3 className=" font-gilroyRegular text-sm bg-[#D9EBFF] w-fit px-5 py-[3px] rounded-md text-darkBlue">
                    {translate(
                      exam.title.en.toLocaleLowerCase(),
                      exam.title.ru.toLocaleLowerCase()
                    )}
                  </h3>
                  <h4 className=" text-base  md:text-[18px]  text-[#001254] dark:text-white pt-[10px] pb-[5px] md:py-[13px]">
                    {translate(exam.subtitle.en, exam.subtitle.ru)}
                  </h4>
                  <p className=" text-xs text-varText dark:text-slate-400">
                    {translate(exam.description.en, exam.description.ru)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Exams;
