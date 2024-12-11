"use client";
import { Container, Title } from "@/components/shared";
import ContactPopUp from "@/components/shared/ContactPopUp";
import { Button, UserMessages } from "@/components/ui";
import { Link, Mail, PhoneCall } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { inputs } from "../../../../public/assets/const";
import Image from "next/image";
import useTranslate from "@/hooks/useTranslate";
interface Form {
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
  Group: string;
}
const Contact = () => {
  const [openPopUp, setOpenPopUp] = React.useState(false);
  const [isErrorInContact, SetIsErrorInContact] = React.useState({
    isTrue: false,
    isError: false,
    serverMessage: "",
  });
  const translate = useTranslate();
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<Form>({
    mode: "onChange",
  });
  const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_CHAT_ID;
  const onSubmit: SubmitHandler<Form> = async (data) => {
    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: `First Name: ${data.FirstName}\nLast Name: ${data.LastName}\nPhone: ${data.Phone}\nEmail: ${data.Email}\nGroup: ${data.Group}`,
          }),
        }
      );
      const responseData = await response.json();
      if (responseData.ok) {
        SetIsErrorInContact((prev) => ({
          ...prev,
          isTrue: true,
        }));
      } else {
        SetIsErrorInContact((prev) => ({
          ...prev,
          isError: true,
        }));
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        SetIsErrorInContact((prev) => ({
          ...prev,
          serverMessage: error.message,
        }));
      } else {
        console.error(
          "An error occurred while sending a message to Telegram",
          error
        );
        SetIsErrorInContact((prev) => ({
          ...prev,
          serverMessage:
            "An error occurred while sending a message to Telegram",
        }));
      }
    }
    reset();
  };
  React.useEffect(() => {
    if (openPopUp) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [openPopUp]);
  return (
    <section id="contact" className=" md:pt-5 pb-[100px] md:pb-[243px]">
      {isErrorInContact.isTrue || isErrorInContact.isError ? (
        <UserMessages
          closeMessage={() =>
            SetIsErrorInContact({
              isTrue: false,
              isError: false,
              serverMessage: "",
            })
          }
          message={
            isErrorInContact.isTrue
              ? "Form submitted successfully!"
              : `something went wrong try again later ${isErrorInContact.serverMessage}`
          }
          isError={isErrorInContact}
        />
      ) : null}
      <Container className=" flex flex-col md:flex-row">
        {/*left side*/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col flex-grow shadow-lg pt-7 pl-5 pr-11 mb-[98px] md:mb-0 md:px-[43px] md:pt-[44px]"
        >
          <Title
            text={translate("Send a message", "Отправить сообщение")}
            size="md"
            className=" pb-[30px] font-gilroyMedium leading-[29px]"
          />
          <div className=" grid grid-cols-1 sm:grid-cols-2  gap-x-[45px] gap-y-[25px] md:gap-y-[66px] mb-[25px] md:mb-0">
            {inputs.map((input) => (
              <div key={input.id} className="flex flex-col">
                <input
                  type={input.type}
                  placeholder={translate(
                    input.placeholder.en,
                    input.placeholder.ru
                  )}
                  className="border-b md:border-b-2 border-[#939393] md:pb-[10px] md:h-[32px]"
                  {...register(input.name as keyof Form, {
                    required: input.required,
                    pattern: input.pattern,
                  })}
                />
                {errors[input.name as keyof Form] && (
                  <span className="text-red-500 text-sm">
                    {errors[input.name as keyof Form]?.message}
                  </span>
                )}
              </div>
            ))}
          </div>
          <input
            type="text"
            placeholder={translate("Group or Company", "Группа или компания")}
            className=" border-b md:border-b-2 border-[#939393] md:pb-[10px] md:mt-[67px] md:mb-[27px] md:h-[32px]"
            {...register("Group", { required: true })}
          />
          <br />
          <textarea
            placeholder={translate("how can we help?", "Чем мы можем помочь?")}
            className=" md:mb-[28px]"
          ></textarea>
          <hr className=" border-[#939393] md:border-t-2" />
          <Button
            type="submit"
            className=" self-center mt-7 mb-[18px] md:mt-[33px] md:mb-[31px] h-[59px]"
          >
            {isSubmitting ? "Sending..." : translate("Submit", "Отправить")}
          </Button>
        </form>
        {/*right side*/}
        <div className="relative basis-[509px] mb-[53px] md:mb-0">
          <div className=" text-white bg-[#5609BBB2] py-7 pl-5 pr-6 md:py-11 md:pl-[43px] relative z-10">
            <Title
              text={translate("Contact Info", "Контактная информация")}
              size="md"
              className="text-white md:mb-6"
            />
            <a
              href="#"
              className="  flex items-center py-4  font-normal text-base md:text-[22px]"
            >
              <PhoneCall className=" mr-[17px]" /> +996222017686
            </a>
            <a
              href="#"
              className="  flex items-center mb-[30px]  font-normal text-base md:text-[22px] md:pb-[47px] md:pt-[33px]"
            >
              <Mail className=" mr-[17px]" /> +motionweb312@gmail.com
            </a>
            <div className=" flex gap-8 mb-[47px] md:mb-[37px]">
              <Image
                src="/assets/icons/contact-telegram.svg"
                alt=""
                width={36}
                height={36}
              />
              <Image
                src="/assets/icons/contact-whatsApp.svg"
                alt=""
                width={36}
                height={36}
              />
              <Image
                src="/assets/icons/contact-instagram.svg"
                alt=""
                width={36}
                height={36}
              />
            </div>
            <div className=" max-w-[372px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11694.23303592896!2d74.56525489987793!3d42.88216706208704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skg!4v1733066263198!5m2!1sen!2skg"
                width="100%"
                height="234"
                loading="lazy"
              ></iframe>
            </div>
          </div>
          <div className=" absolute -top-[28px] -right-2 md:-right-[47px] h-[110%] w-[90%]  border-2 border-[#BBBBBB] dark:border-[#000] z-0">
            <div
              onClick={() => setOpenPopUp((prev) => !prev)}
              className="hidden md:block absolute -right-14 top-1/2 -translate-x-1/2 px-4 py-4 rounded-full bg-[#E5EA00] cursor-pointer"
            >
              <Link />
            </div>
          </div>
        </div>
        <ContactPopUp
          setOpenPopUp={setOpenPopUp}
          openPopUp={openPopUp}
          className={openPopUp ? "active" : ""}
        />
        <div
          onClick={() => setOpenPopUp((prev) => !prev)}
          className=" flex md:hidden items-center border py-1 px-7 space-x-[10px] self-end rounded-lg cursor-pointer"
        >
          <div className="px-[11px] py-[11px] rounded-full bg-[#E5EA00]">
            <Link />
          </div>
          <span className="text-base text-[#BBBBBB]">Copy the link</span>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
