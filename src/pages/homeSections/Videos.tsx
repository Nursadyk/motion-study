import { Container } from "@/components/shared";
import React from "react";

export const Videos = () => {
  return (
    <section className=" pb-[124px] md:pb-[220px]">
      <Container>
        <h2 className="text-[28px] mb-[34px] md:mb-[111px] text-titleText font-gilroyMedium md:text-center md:text-[44px]">
          video testimonials from our students
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
};
