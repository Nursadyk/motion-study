"use client";
import { Container, SearchItems, Title } from "@/components/shared";
import { Button } from "@/components/ui";
import useTranslate from "@/hooks/useTranslate";
import React from "react";

function Hero() {
  const [animationClass, setAnimationClass] = React.useState("animate-grow");
  const translate = useTranslate();
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimationClass("animate-bounce-slow");
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className=" pt-[39px] pb-[124px] md:py-20">
      <Container className=" flex  flex-wrap justify-between gap-10 relative">
        <div className="animate-slide-right">
          <SearchItems type="mobile" />
          <Title
            text={translate("Explore the world", "Исследуйте мир")}
            className=" text-[#5609BBCC] font-medium md:font-semibold pt-[38px] md:pt-[52px] md:text-2xl"
            size="lg"
          />
          <Title
            text={translate(
              "Study abroad with our help",
              "Учитесь за границей с нашей помощью"
            )}
            size="sm"
            className=" font-gilroyBold tracking-wider max-w-[491px] py-[15px] md:pt-9 md:pb-[17px]"
          />
          <p className=" text-base text-[#606060] dark:text-white font-normal md:text-lg  max-w-[393px]">
            {translate(
              "Study at the {`world's`} top universities and expand your horizons.Get the highest quality education and achieve success abroad.",
              "Учитесь в лучших университетах мира и расширьте свой кругозор. Получите образование высочайшего качества и добивайтесь успеха за рубежом."
            )}
          </p>
        </div>
        <div className="relative">
          <img src="/assets/images/home-bg.png" alt="" />
          <div className=" absolute top-0 grid grid-cols-2 grid-rows-2  items-center justify-items-center">
            <img
              src="/assets/images/home-bg-one.png"
              alt=""
              className={`${animationClass} shrink sm:w-[165px] sm:h-[165px]`}
              width={105}
              height={105}
            />
            <img
              src="/assets/images/home-bg-two.png"
              alt=""
              className={`${animationClass}`}
            />
            <img
              src="/assets/images/home-bg-three.png"
              alt=""
              className={`${animationClass}`}
            />
            <img
              src="/assets/images/home-bg-four.png"
              alt=""
              className={`${animationClass} sm:w-[165px] sm:h-[165px]`}
              width={105}
              height={105}
            />
          </div>
        </div>
        <div className="flex flex-col w-full gap-y-[35px] px-[23px] pt-[59px] pb-[42px] rounded-[34px] animate-slide-right md:flex-row md:w-fit md:absolute md:bottom-0  md:justify-between bg-white dark:bg-slate-900 shadow-lg md:rounded-full md:px-[34px] md:py-[26px] z-20">
          <div className="flex items-center gap-4">
            <img src="/assets/icons/user-contact-hero.svg" alt="" />
            <form className=" flex flex-col gap-[10px]">
              <label htmlFor="name" className=" md:text-xs font-normal">
                {translate("NAME", "ИМЯ")}
              </label>
              <input
                type="text"
                id="name"
                placeholder={translate("| Enter your name", "Введите свое имя")}
                className=" placeholder:font-normal text-[17px]"
              />
            </form>
          </div>
          <div className="flex items-center gap-4">
            <img src="/assets/icons/phone-contact-hero.svg" alt="" />
            <form className=" flex flex-col gap-[10px]">
              <label htmlFor="name" className=" md:text-xs font-normal">
                {translate("PHONE", "ТЕЛЕФОН")}
              </label>
              <input
                type="number"
                id="name"
                placeholder={translate(
                  "Enter your phone",
                  "Введите ваш телефон"
                )}
                className=" placeholder:font-normal text-[17px]"
              />
            </form>
          </div>
          <Button type="submit">{translate("Сontact", "Связаться")}</Button>
        </div>
      </Container>
    </section>
  );
}
export default Hero;
