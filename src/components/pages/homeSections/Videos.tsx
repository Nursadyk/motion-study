"use client";
import { Container } from "@/components/shared";
import useTranslate from "@/hooks/useTranslate";
import React from "react";

function Videos() {
  const translate = useTranslate();
  return (
    <section className=" pb-[124px] md:pb-[220px]">
      <Container>
        <h2 className="text-[28px] mb-[34px] md:mb-[111px] text-titleText dark:text-white font-gilroyMedium md:text-center md:text-[44px]">
          {translate(
            "video testimonials from our students",
            "видеоотзывы наших студентов"
          )}
        </h2>
        <div className="scroll-section flex overflow-x-scroll -space-x-0 md:space-x-10 w-full">
          <div className="min-w-[340px] md:min-w-[570px]">
            <iframe
              className=" w-[322px] md:w-full h-[211px] md:h-[340px]"
              src="https://www.youtube.com/embed/axYAW7PuSIM?si=QorJBADZhRbfaYKr"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="min-w-[340px] md:min-w-[570px]">
            <iframe
              className=" w-[322px] md:w-full h-[211px] md:h-[340px]"
              src="https://www.youtube.com/embed/FZY1phel0UI?si=1Szv59Fuh_rjB5iA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="min-w-[340px] md:min-w-[570px]">
            <iframe
              className=" w-[322px] md:w-full h-[211px] md:h-[340px]"
              src="https://www.youtube.com/embed/FZY1phel0UI?si=1Szv59Fuh_rjB5iA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="min-w-[340px] md:min-w-[570px]">
            <iframe
              className=" w-[322px] md:w-full h-[211px] md:h-[340px]"
              src="https://www.youtube.com/embed/FZY1phel0UI?si=1Szv59Fuh_rjB5iA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
          <div className="min-w-[340px] md:min-w-[570px]">
            <iframe
              className=" w-[322px] md:w-full h-[211px] md:h-[340px]"
              src="https://www.youtube.com/embed/FZY1phel0UI?si=1Szv59Fuh_rjB5iA"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  );
}
export default Videos;
