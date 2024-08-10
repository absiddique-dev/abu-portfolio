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

const words = `A diverse group of skilled professionals united by a passion for excellence and innovation. We combine our unique talents to tackle challenges, drive progress, and deliver outstanding results in every project we undertake.
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
              <div className="rounded-xl w-full p-6 flex flex-col space-y-4 bg-white shadow-lg">
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    src="https://www.nicepng.com/png/detail/128-1280593_computer-user-icon-img-users.png"
                    alt="User Profile"
                    className="object-cover w-full h-full rounded-full border-2 border-gray-200"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <h1 className="text-xl font-semibold text-gray-800">
                    {item.name}
                  </h1>
                  <span className="text-sm text-gray-600">{item.role}</span>
                </div>
                <div className="w-full h-px bg-gray-200"></div>
                <button className="px-4 py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-300">
                  View Profile
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Team;
