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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, commodi
        dolore labore eligendi doloribus quidem, at vitae quos sed voluptates
        dolorum architecto? Et dolorem numquam at id architecto voluptatum modi!
      </p>
    </div>
  );
}
