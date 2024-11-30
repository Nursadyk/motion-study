import React from "react";
import { Hero } from "./homeSections/Hero";
import { Experiences } from "./homeSections/Experiences";
import { Exams } from "./homeSections/Exams";
import { Videos } from "./homeSections/Videos";

export const HomePage = () => {
  return (
    <>
      <Hero />
      <Experiences />
      <Exams />
      <Videos />
    </>
  );
};
