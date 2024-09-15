// import { Button } from "@nextui-org/button";
import { Button } from "@nextui-org/react";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const WorkExperience = () => {
  const works = [
    {
      title: "Graduate Farmer",
      type: "Website",
      link: "https://graduatefarmers.com/",
      logo: "https://graduatefarmers.com/assets/logo/logo.png",
      context:
        "Developed a comprehensive website for SA Accounting, featuring secure client portals, tax calculators, and resource libraries, streamlining financial services and improving client engagement.",
    },
    {
      title: "SA Accounting",
      type: "Website",
      link: "",
      logo: "/assests/logos/sa-accounting.png",
      context:
        "Developed a comprehensive website for SA Accounting, featuring secure client portals, tax calculators, and resource libraries, streamlining financial services and improving client engagement.",
    },
    {
      title: "Ribub",
      type: "App",
      link: "",
      logo: "/assests/logos/ribub-logo.png",
      context:
        "Developed a comprehensive online education platform featuring interactive courses, live tutoring, and personalized learning paths to revolutionize digital education and enhance student engagement.",
    },
    {
      title: "Career Study Admin",
      type: "Website",
      link: "careerstudy.in",
      logo: "https://www.careerstudy.in/assets/logo/black-logo.png",
      context:
        "Developed a comprehensive online education platform featuring interactive courses, live tutoring, and personalized learning paths to revolutionize digital education and enhance student engagement.",
    },
    {
      title: "Career Study Web",
      type: "Website",
      link: "careerstudy.in",
      logo: "https://www.careerstudy.in/assets/logo/black-logo.png",
      context:
        "Developed a comprehensive online education platform featuring interactive courses, live tutoring, and personalized learning paths to revolutionize digital education and enhance student engagement.",
    },
    {
      title: "Optimus Tea",
      type: "Website",
      link: "optimustea.com",
      logo: "https://optimustea.com/assets/logo/Source/Optimus_tea_Logo-01.png",
      context:
        "Created a high-performing e-commerce site for Optimus Tea, integrating secure payment gateways, inventory management, and a user-friendly interface, resulting in significant growth in online sales and customer satisfaction.",
    },
    {
      title: "Assam Job Portal",
      type: "Website",
      link: "assamjobportal.com",
      logo: "https://optimustea.com/assets/logo/Source/Optimus_tea_Logo-01.png",
      context:
        "Built a dynamic job update website for Assam, featuring real-time job listings, application tracking, and employer-candidate matching, effectively bridging the gap between local businesses and job seekers.",
    },
    {
      title: "Assam Tet",
      type: "Website",
      link: "assamtet.com",
      logo: "https://assamtet.com/assets/photos/assamtet-transparent.png",
      context:
        "Designed and implemented an advanced e-learning platform for Assam Teacher Eligibility Test preparation, offering mock tests, video lessons, and performance analytics to enhance candidates' exam readiness.",
    },
    {
      title: "Elavate Tax Solution",
      type: "Website",
      link: "elavatetaxsolution.in",
      logo: "https://www.elavatetaxsolution.in/img/logo/elavate-banner.png",
      context:
        "Developed a comprehensive website for Elavate Tax Solution, featuring secure client portals, tax calculators, and resource libraries, streamlining financial services and improving client engagement.",
    },
  ];
  return (
    <div className="w-full flex flex-col justify-center relative py-11">
      <div className="flex justify-between items-center">
        <h2 className="text-[25px] lg:text-[40px] py-11">Previous Works</h2>
        <Button variant="flat" radius="full">
          More
        </Button>
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
                  <h3 className="text-[20px]">{item.title}</h3>
                  <a
                    className="text-[12px] flex gap-x-1"
                    href={`http://${item.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.link}
                    {item.link !== "" ? (
                      <Globe size={15} />
                    ) : (
                      "Mobile Application"
                    )}
                  </a>
                </div>
                <img
                  src={item.logo}
                  className="w-[70px] object-contain rounded-lg"
                />
              </div>
              <hr className=" opacity-20" />
              <p className="text-[12px] h-16">{item?.context}</p>
              <div className="flex justify-between">
                <span>{item.type}</span>
                <Link
                  href={"https://" + item.link}
                  className="px-2 py-1 text-sm rounded-full bg-sky-500 size-sm"
                >
                  Explore
                </Link>
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
