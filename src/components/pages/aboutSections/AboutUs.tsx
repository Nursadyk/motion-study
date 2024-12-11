"use client";
import { Container, Title } from "@/components/shared";
import useTranslate from "@/hooks/useTranslate";
import Image from "next/image";
import React from "react";

function AboutUs() {
  const translate = useTranslate();
  return (
    <section className="pt-16 pb-[86px] md:pt-[115px] md:pb-[158px]">
      <Container className=" flex flex-col md:flex-row gap-y-14 gap-x-[64px] justify-between">
        {/*left side*/}
        <div className=" order-last md:order-first">
          <Image
            src="/assets/images/about-home.png"
            alt="about-hero-image"
            width={560}
            height={576}
            layout="intrinsic"
          />
        </div>
        {/*right side*/}
        <div>
          <div className=" max-w-[470px]">
            <Title
              text={translate("ABOUT US", "О НАС")}
              size="2xl"
              className=" text-[#6483F6] font-bold mb-4 md:mb-[18px]"
            />
            <h3 className=" font-gilroyMedium text-[28px] md:text-[52px] mb-[18px] md:mb-7 md:leading-[64px]">
              {translate(
                "Best Education Platform",
                "Лучшая образовательная платформа"
              )}
            </h3>
            <p className="font-normal text-lg md:text-xl text-[#333333] dark:text-white mb-6 md:mb-4">
              {translate(
                "Apparently we had reached a great height in the atmosphere, for the sky was a dead black.",
                "Видимо, мы достигли большой высоты в атмосфере, поскольку небо было абсолютно черным."
              )}
            </p>
            <p className=" font-normal text-base text-[#33333380] leading-8 dark:text-slate-400">
              {translate(
                "By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle.",
                "Благодаря той же иллюзии, которая поднимает горизонт моря до уровня наблюдателя на склоне холма, черное облако внизу было вытянуто, и машина, казалось, плыла посередине."
              )}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default AboutUs;
