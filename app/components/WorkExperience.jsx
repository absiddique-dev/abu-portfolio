// import { Button } from "@nextui-org/button";
import { Button } from "@nextui-org/react";
import { Globe } from "lucide-react";
import Image from "next/image";
import React from "react";

const WorkExperience = () => {
  const works = [
    {
      title: "Optimus Tea",
      link: "optimustea.com",
      logo: "https://optimustea.com/assets/logo/Source/Optimus_tea_Logo-01.png",
      context:
        "Developed and launched Optimus Tea's e-commerce website, enhancing user experience and boosting online sales through responsive design, SEO optimization, and robust e-commerce functionalities.",
    },
    {
      title: "Assam Job Portal",
      link: "assamjobportal.com",
      logo: "https://optimustea.com/assets/logo/Source/Optimus_tea_Logo-01.png",
      context:
        "Developed and launched Optimus Tea's e-commerce website, enhancing user experience and boosting online sales through responsive design, SEO optimization, and robust e-commerce functionalities.",
    },
    {
      title: "Assam Tet",
      link: "assamtet.com",
      logo: "https://assamtet.com/assets/photos/assamtet-transparent.png",
      context:
        "Developed and launched Optimus Tea's e-commerce website, enhancing user experience and boosting online sales through responsive design, SEO optimization, and robust e-commerce functionalities.",
    },
    {
      title: "Elavate Tax Solution",
      link: "elavatetaxsolution.in",
      logo: "https://www.elavatetaxsolution.in/img/logo/elavate-banner.png",
      context:
        "Developed and launched Optimus Tea's e-commerce website, enhancing user experience and boosting online sales through responsive design, SEO optimization, and robust e-commerce functionalities.",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center relative py-11">
      <div className="flex justify-between items-center">
        <h1 className="text-[25px] lg:text-[40px] py-11">Previous Works</h1>
        <Button size="sm">More</Button>
      </div>
      <div className="work-details grid grid-cols-1 md:grid-cols-2 gap-5 z-10">
        {works.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full space-y-5 border min-h-[240px] h-full bg-[#1b0c2ba5] p-5 border-teal-100 rounded-xl"
            >
              <div className="flex justify-between">
                <div className="flex flex-col">
                  <p className="text-[20px]">{item.title}</p>
                  <a
                    className="text-[12px] flex gap-x-1"
                    href={`http://${item.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link}
                    <Globe size={15} />
                  </a>
                </div>
                <Image
                  src="https://optimustea.com/assets/logo/Source/Optimus_tea_Logo-01.png"
                  width={80}
                  height={80}
                />
              </div>
              <hr className=" opacity-20" />
              <p className="text-[12px]">
                Developed and launched Optimus Tea's e-commerce website,
                enhancing user experience and boosting online sales through
                responsive design, SEO optimization, and robust e-commerce
                functionalities.
              </p>
              <div className="flex justify-between">
                <span>Website</span>
                <Button size={"sm"} className="text-black">
                  Explore
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute top-1/2 -translate-y-1/2 left-1/2 transform -translate-x-1/2 lg:w-[600px] lg:h-[500px] md:w-[300px] md:h-[300px] rounded-full bg-gradient-radial from-[#442c62] via-[#27104cc6] to-[#230e3ed3] shadow-2xl filter blur-2xl"></div>
    </div>
  );
};

export default WorkExperience;
