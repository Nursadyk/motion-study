"use client";
import React from "react";
import { Button } from "../ui";
import Image from "next/image";
import clsx from "clsx";
interface Props {
  setOpenPopUp: (i: boolean) => void;
  openPopUp: boolean;
  className?: string;
}
const ContactPopUp: React.FC<Props> = ({
  setOpenPopUp,
  openPopUp,
  className,
}) => {
  return (
    <div
      onClick={() => setOpenPopUp(false)}
      className={`overlay-contact ${className}`}
    >
      <div
        className={clsx(
          "relative mx-auto md:absolute md:right-[92px] -bottom-full flex flex-col w-fit max-h-[321px] bg-white z-50 px-[19px]",
          {
            "transition-easy top-1/2 -translate-y-1/2": openPopUp,
          }
        )}
      >
        <h3 className=" text-[22px] text-center text-titleText pt-10 pb-4">
          Send
        </h3>
        <p className=" text-center pb-7 text-sm md:text-lg text-titleText">
          Share this site with your friends
        </p>
        <div className=" flex gap-x-6 justify-center items-center mb-[50px]">
          <Image
            src="/assets/icons/WhatsApp-icon.svg"
            alt="whatsapp"
            width={48}
            height={48}
          />
          <Image
            src="/assets/icons/instagram-icon.svg"
            alt="instagram"
            width={48}
            height={48}
          />
          <Image
            src="/assets/icons/Facebook-icon.svg"
            alt="Facebook"
            width={48}
            height={48}
          />
          <Image
            src="/assets/icons/telegram-icon-bg.svg"
            alt="whatsapp"
            width={48}
            height={48}
          />
        </div>
        <Button type="button" className="self-center mb-8">
          Done
        </Button>
      </div>
    </div>
  );
};

export default ContactPopUp;
