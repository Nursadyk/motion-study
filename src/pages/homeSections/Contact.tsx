import { Container, Title } from "@/components/shared";
import { Button } from "@/components/ui";
import React from "react";
const inputs = [
  {
    id: 1,
    type: "text",
    placeholder: "First Name",
  },
  {
    id: 2,
    type: "text",
    placeholder: "Last Name",
  },
  {
    id: 3,
    type: "number",
    placeholder: "Phone",
  },
  {
    id: 4,
    type: "email",
    placeholder: "Email",
  },
];
const Contact = () => {
  return (
    <section className=" md:pt-5 md:pb-[243px]">
      <Container className=" flex flex-col md:flex-row">
        {/*left side*/}
        <form className=" flex flex-col flex-grow shadow-lg pt-7 pl-5 pr-11 md:px-[43px] md:pt-[44px]">
          <Title text="Send a message" size="md" className=" pb-[30px]" />
          <div className=" grid grid-cols-1 sm:grid-cols-2  gap-x-[45px] gap-y-[66px]">
            {inputs.map((input) => (
              <input
                key={input.id}
                type={input.type}
                placeholder={input.placeholder}
                className="border-b md:border-b-2 border-[#939393] md:pb-[10px]"
              />
            ))}
          </div>
          <input
            type="text"
            placeholder="Group or Company"
            className=" border-b md:border-b-2 border-[#939393] md:pb-[10px] md:mt-[67px] md:mb-[57px]"
          />
          <br />
          <textarea
            placeholder="how can we help?"
            className="border md:border-none border-b md:border-b-2 border-[#939393] md:pb-[56px]"
          ></textarea>
          <Button
            type="submit"
            className=" self-center mt-7 mb-[18px] md:mt-[33px] md:mb-[31px]"
          >
            Submit
          </Button>
        </form>
        {/*right side*/}
        <div className="relative basis-[509px]">
          <div className="">
            <Title text="contact Info" size="md" className="text-white" />
          </div>
          <div className=" absolute"></div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
