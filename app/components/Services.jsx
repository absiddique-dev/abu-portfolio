import { Button } from "@nextui-org/button";
import { Globe } from "lucide-react";
import Image from "next/image";
import React from "react";

const Services = () => {
  //   const works = [
  //     {
  //       title: "Optimus Tea",
  //       link: "optimustea.com",
  //       logo: "https://optimustea.com/assets/logo/Source/Optimus_tea_Logo-01.png",
  //       context:
  //         "Developed and launched Optimus Tea's e-commerce website, enhancing user experience and boosting online sales through responsive design, SEO optimization, and robust e-commerce functionalities.",
  //     },
  //     {
  //       title: "Assam Job Portal",
  //       link: "assamjobportal.com",
  //       logo: "https://optimustea.com/assets/logo/Source/Optimus_tea_Logo-01.png",
  //       context:
  //         "Developed and launched Optimus Tea's e-commerce website, enhancing user experience and boosting online sales through responsive design, SEO optimization, and robust e-commerce functionalities.",
  //     },
  //     {
  //       title: "Assam Tet",
  //       link: "assamtet.com",
  //       logo: "https://assamtet.com/assets/photos/assamtet-transparent.png",
  //       context:
  //         "Developed and launched Optimus Tea's e-commerce website, enhancing user experience and boosting online sales through responsive design, SEO optimization, and robust e-commerce functionalities.",
  //     },
  //     {
  //       title: "Elavate Tax Solution",
  //       link: "elavatetaxsolution.in",
  //       logo: "https://www.elavatetaxsolution.in/img/logo/elavate-banner.png",
  //       context:
  //         "Developed and launched Optimus Tea's e-commerce website, enhancing user experience and boosting online sales through responsive design, SEO optimization, and robust e-commerce functionalities.",
  //     },
  //   ];
  const services = [
    {
      serial: "01",
      title: "Website Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusamus nam temporibus error dolorum ipsam doloribus alias omnis voluptate delectus reiciendis eos labore culpa ex, perferendis harum. Odio, asperiores aut?",
    },
    {
      serial: "02",
      title: "App Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusamus nam temporibus error dolorum ipsam doloribus alias omnis voluptate delectus reiciendis eos labore culpa ex, perferendis harum. Odio, asperiores aut?",
    },
    {
      serial: "03",
      title: "Graphic Design",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusamus nam temporibus error dolorum ipsam doloribus alias omnis voluptate delectus reiciendis eos labore culpa ex, perferendis harum. Odio, asperiores aut?",
    },
    {
      serial: "04",
      title: "SEO for Youtube",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore accusamus nam temporibus error dolorum ipsam doloribus alias omnis voluptate delectus reiciendis eos labore culpa ex, perferendis harum. Odio, asperiores aut?",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center relative py-[40px]">
      <p className="text-center text-[#6F27BA] text-[15px]">How Can I help?</p>
      <h1 className="text-[25px] lg:text-[40px] text-center">Services</h1>

      <div className="services pt-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 z-10">
        {services.map((item, index) => (
          <div
            key={index}
            style={{ border: "0.5px solid white" }}
            className="service-box w-full min-h-[350px] lg:min-h-[200px] bg-[#ae98bc13] rounded-xl p-8 backdrop-blur-lg"
          >
            <div className="flex items-center gap-x-5">
              {" "}
              <div className="bg-red-500 w-[40px] h-[0.5px]"></div>
              <span className="text-[20px]">{item.serial}</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-[30px] py-5 uppercase text-wrap">
                {item.title}
              </h1>
              <p className="text-[15px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute opacity-50 top-0 left-[0] lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-radial from-[#442c62a3] to-[#230e3e93] shadow-2xl filter blur-2xl"></div>
      <div className="absolute bottom-[50] right-[0] lg:w-[500px] lg:h-[500px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-radial from-[#442c62a3] to-[#230e3e93] shadow-2xl filter blur-2xl"></div>
    </div>
  );
};

export default Services;
Services;
