"use client";
import { Container, Title } from "@/components/shared";
import ContactPopUp from "@/components/shared/ContactPopUp";
import { Button } from "@/components/ui";
import { Instagram, Link, Mail, Phone, PhoneCall, Send } from "lucide-react";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { inputs } from "../../../public/assets/const";
interface Form {
  FirstName: string;
  LastName: string;
  Phone: string;
  Email: string;
  Group: string;
}
const Contact = () => {
  const [openPopUp, setOpenPopUp] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    reset,
  } = useForm<Form>({
    mode: "onBlur",
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
        alert("Form submitted successfully!");
      }
    } catch (error) {
      alert("Failed to submit the form. Please try again later.");
      console.log(error);
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
    <section className=" md:pt-5 md:pb-[243px]">
      <Container className=" flex flex-col md:flex-row">
        {/*left side*/}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className=" flex flex-col flex-grow shadow-lg pt-7 pl-5 pr-11 md:px-[43px] md:pt-[44px]"
        >
          <Title
            text="Send a message"
            size="md"
            className=" pb-[30px] font-gilroyMedium leading-[29px]"
          />
          <div className=" grid grid-cols-1 sm:grid-cols-2  gap-x-[45px] gap-y-[66px]">
            {inputs.map((input) => (
              <div key={input.id} className="flex flex-col">
                <input
                  type={input.type}
                  placeholder={input.placeholder}
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
            placeholder="Group or Company"
            className=" border-b md:border-b-2 border-[#939393] md:pb-[10px] md:mt-[67px] md:mb-[27px] md:h-[32px]"
            {...register("Group", { required: true })}
          />
          <br />
          <textarea
            placeholder="how can we help?"
            className=" md:mb-[28px]"
          ></textarea>
          <hr className=" border-[#939393] md:border-t-2" />
          <Button
            type="submit"
            className=" self-center mt-7 mb-[18px] md:mt-[33px] md:mb-[31px] h-[59px]"
          >
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
        {/*right side*/}
        <div className="relative basis-[509px]">
          <div className=" text-white bg-[#5609BBB2] md:py-11 md:pl-[43px] relative z-10">
            <Title
              text="Contact Info"
              size="md"
              className="text-white md:mb-6"
            />
            <a
              href="#"
              className="  flex items-center  font-normal text-[22px]"
            >
              <PhoneCall className=" mr-[17px]" /> +996222017686
            </a>
            <a
              href="#"
              className="  flex items-center  font-normal text-[22px] md:pb-[47px] md:pt-[33px]"
            >
              <Mail className=" mr-[17px]" /> +motionweb312@gmail.com
            </a>
            <div className=" flex md:gap-8 md:mb-[37px]">
              <Send color="white" fill="white" />
              <Phone color="white" fill="white" />
              <Instagram color="white" fill="white" />
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
          <div className=" absolute -top-[28px] -right-[47px] h-[653px] w-[448px] border-2 border-[#BBBBBB] dark:border-[#000] z-0">
            <div
              onClick={() => setOpenPopUp((prev) => !prev)}
              className="absolute -right-14 top-1/2 -translate-x-1/2 px-4 py-4 rounded-full bg-[#E5EA00] cursor-pointer"
            >
              <Link />
            </div>
          </div>
        </div>
        {openPopUp && <ContactPopUp setOpenPopUp={setOpenPopUp} />}
      </Container>
    </section>
  );
};

export default Contact;
