"use client";
import React from "react";
import { Container } from "./Container";
import Image from "next/image";
import Navbar from "./Navbar";

export const Footer = () => {
  return (
    <footer className=" mt-auto">
      <Container className=" flex justify-between items-center border-b border-gray-600 pb-11">
        <div>
          <Image
            src="/assets/icons/footer-logo.svg"
            alt="footer-logo"
            width={71}
            height={33}
          />
        </div>
        <Navbar setActive={() => 0} type="footer" />
        <div className=" flex items-center space-x-6">
          <Image
            src="/assets/icons/youtube-icon.svg"
            alt="youtube-icon"
            width={41}
            height={27}
          />
          <Image
            src="/assets/icons/telegram-icon.svg"
            alt="telegram-icon"
            width={30}
            height={27}
          />
          <Image
            src="/assets/icons/instagram.svg"
            alt="instagram-icon"
            width={36}
            height={36}
          />
        </div>
      </Container>
    </footer>
  );
};
