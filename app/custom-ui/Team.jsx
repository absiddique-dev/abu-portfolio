"use client";
import { FlipWords } from "../components/ui/flip-words";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  FreeMode,
} from "swiper/modules";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

const teamTitle = [
  "Software Engineer",
  "Web Developer",
  "App Developer",
  "Graphic Designer",
];

const members = [
  { name: "Redrose Sid", role: "Full Stack Developer", img: "" },
  { name: "Maksed Ali", role: "Frontend Developer", img: "" },
  { name: "Saidur Rahman", role: "Frontend Developer", img: "" },
  { name: "Imdadullah Babu", role: "Software Engineer", img: "" },
  { name: "Abbasi", role: "Frontend Developer", img: "" },
  { name: "Mustafizur", role: "Software Engineer", img: "" },
  { name: "Rafiii", role: "Graphic Designer", img: "" },
];
const Team = () => {
  return (
    <>
      <div className="w-full px-5 md:px-11 lg:px-[200px] flex flex-col justify-center relative bg-[#12071F]">
        <h1 className="text-[25px] lg:text-[40px] py-5 text-center">
          Team of
          <FlipWords words={teamTitle} />
        </h1>
        <TextGenerateEffect words={words} />

        {/* <div className="team-members grid grid-cols-1 md:grid-cols-2 gap-5 z-10"></div> */}
      </div>

      <div className="w-full flex flex-col justify-center relative py-11 bg-[#12071F]">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView={5}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          mousewheel={true}
          freeMode={{ enabled: true, sticky: true }}
          modules={[Autoplay, Navigation, Mousewheel, FreeMode]}
          loop={true}
          className="mySwiper w-full"
        >
          {members?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl w-full p-5 flex flex-col  space-y-3 text-black items-center">
                <img
                  src="/assests/team/abs.png"
                  alt="Photo"
                  className="object-cover border aspect-square rounded-xl"
                />
                <div className="flex flex-col border border-[#fffcfcd0] p-2 rounded-lg items-center text-white w-full">
                  <h1 className="text-xl">{item.name}</h1>
                  <span className="text-[12px]">{item.role}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Team;
