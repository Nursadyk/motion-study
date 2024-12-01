import { Container, Title } from "@/components/shared";
import React from "react";
import { experienceItems } from "../../../public/assets/const";
import Image from "next/image";

function Experiences() {
  return (
    <section className=" pb-[124px] md:pb-[160px]">
      <Container className="flex flex-wrap xl:flex-nowrap justify-between items-center gap-[45px]  ">
        <div className=" flex-grow">
          <Title
            text="This is Why We Are Best From Others"
            size="5xl"
            className=" font-gilroyMedium max-w-[465px] text-titleText"
          />
          <p className="max-w-[555px] text-base md:text-lg font-normal text-varText dark:text-slate-400  pb-[50px] pt-[30px] ">
            We provide full support at all stages of preparation, including
            assistance in filing documents and preparing for an interview.
            Contact us and start your journey to higher education abroad!
          </p>
          <div>
            <img src="/assets/images/experience.png" alt="" />
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-[35px] gap-y-[44px]">
          {experienceItems.map((experienceItem) => (
            <div
              key={experienceItem.id}
              className=" py-9 px-5 space-y-5 shadow-lg rounded-lg dark:bg-slate-800"
            >
              <div className=" flex items-center gap-x-5 md:block">
                <Image
                  src={experienceItem.image}
                  alt={experienceItem.title}
                  className="object-cover md:pt-[11px] md:pb-6"
                  width={46}
                  height={46}
                />
                <h3 className="text-[28px] md:text-[22px] text-varText dark:text-white">
                  {experienceItem.title}
                </h3>
              </div>
              <p className="max-w-full md:max-w-[228px] text-lg font-normal text-varText dark:text-slate-400 md:text-[#001254] md:text-sm md:pb-2">
                {experienceItem.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
export default Experiences;
