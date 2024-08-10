import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function Roles() {
  const words = [
    "Software Engineer",
    "Web Developer",
    "App Developer",
    "Graphic Designer",
  ];

  return (
    <div className="box-details w-full px-[20px] py-8 pb-[80px]">
      <h1
        style={{ fontWeight: 200 }}
        className="text-[25px] lg:text-[40px] tracking-wide md:text-nowrap"
      >
        I'm a<FlipWords words={words} /> <br />
      </h1>
      <p className="text-[15px]">
        Currently, I'm providing software solution all over the world
      </p>
      <p className="text-[15px] pt-8">
        Full Stack web and app developers creating seamless digital experiences
        in the fields of web applications, UI/UX, and user-centered design.
        Transforming your ideas into impactful solutions that drive engagement
        and growth.
      </p>
    </div>
  );
}
