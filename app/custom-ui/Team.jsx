"use client";
import { FlipWords } from "../components/ui/flip-words";
import { TextGenerateEffect } from "../components/ui/text-generate-effect";
import React, { useEffect, useRef, useState } from "react";
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

const Team = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const members = [
    {
      name: "Redrose Sid",
      role: "Full Stack Developer",
      img: [
        "/assests/team/abs-[0].png",
        "/assests/team/abs-[1].png",
        "/assests/team/abs-[2].png",
      ],
      id: "abs",
      url: "/",
    },
    {
      name: "Imdadullah Babu",
      role: "Software Engineer",
      img: "/assests/team/imdad.png",
      url: "https://imdos.in",
    },
    {
      name: "Maksed Ali",
      role: "Frontend Developer",
      img: "/assests/team/maksed.png",
    },
    {
      name: "Saidur Rahman",
      role: "Frontend Developer",
      img: "/assests/team/saidur.png",
    },
    {
      name: "Abbasi",
      role: "Frontend Developer",
      img: "/assests/team/abbasi.png",
      url: "https://ajabbasi.in",
    },
    { name: "Mustafizur", role: "Software Engineer", img: "" },
    { name: "Rafiii", role: "Graphic Designer", img: "" },
    { name: "Sadek", role: "Web Developer", img: "" },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <div className="w-full px-5 md:px-11 lg:px-[200px] flex flex-col justify-center relative bg-[#12071F]">
        <h1 className="text-[25px] lg:text-[40px] py-5 text-center">
          Team of
          <FlipWords words={teamTitle} />
        </h1>
        <TextGenerateEffect words={words} />
      </div>

      <div className="w-full hidden lg:flex flex-col justify-center relative py-11 bg-[#12071F]">
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
          className="mySwiper w-full  "
        >
          {members?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="rounded-xl w-full p-6 flex flex-col space-y-4 border bg-gray-50 shadow-lg">
                <div className="relative w-32 h-32 mx-auto">
                  <img
                    src={
                      item.img !== ""
                        ? item.id === "abs"
                          ? item.img[currentImageIndex]
                          : item.img
                        : "https://www.nicepng.com/png/detail/128-1280593_computer-user-icon-img-users.png" // Default image for empty img
                    }
                    alt={item.name}
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
                  <a
                    href={item.url !== "" ? item.url : "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    View Profile
                  </a>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full lg:hidden flex-col justify-center relative py-11 bg-[#12071F] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {members?.length > 4 &&
          members?.slice(0, 4).map((item, index) => (
            <div
              className="rounded-xl w-full p-6  space-y-4 border bg-gray-50 shadow-lg"
              key={index}
            >
              <div className="relative w-32 h-32 mx-auto">
                <img
                  src={
                    item.img !== ""
                      ? item.id === "abs"
                        ? item.img[currentImageIndex]
                        : item.img
                      : "https://www.nicepng.com/png/detail/128-1280593_computer-user-icon-img-users.png" // Default image for empty img
                  }
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
              <button className="px-4 w-full py-2 text-sm font-medium text-gray-600 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-300">
                <a
                  href={item.url !== "" ? item.url : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {" "}
                  View Profile
                </a>
              </button>
            </div>
          ))}
      </div>
    </>
  );
};

export default Team;
