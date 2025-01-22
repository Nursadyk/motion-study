"use client";
import useFetch from "@/hooks/useFetch";
import { useParams } from "next/navigation";
import React from "react";
import { Container } from "../shared";
import Image from "next/image";

const UniverseDetail = () => {
  const { univerId } = useParams();
  const { data } = useFetch<IUniverse[]>(
    "https://65ed686c0ddee626c9b197ce.mockapi.io/univer"
  );
  const findCurrentUniverse = data?.find((el) => el.id === Number(univerId));
  return (
    <section>
      <Container>
        <h1>{findCurrentUniverse?.name.en}</h1>
        <Image
          src={findCurrentUniverse ? findCurrentUniverse?.name.png : ""}
          alt="maby"
          width={200}
          height={200}
        />
      </Container>
    </section>
  );
};

export default UniverseDetail;
