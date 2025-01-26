import { AlignRight, Cross, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const lists = [
    {
      title: "Home",
      link: "/#",
    },
    {
      title: "Services",
      link: "/#services",
    },
    {
      title: "Recent Works",
      link: "/#works",
    },
    {
      title: "Team",
      link: "/#team",
    },
    {
      title: "Text to Image",
      link: "/text-to-image",
    },
  ];
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="nav text-white flex fixed z-[99] w-full bg-transparent backdrop-blur-lg px-5 md:px-11 lg:px-[200px] justify-between items-center py-4 bg-[#1A0C2E]">
        <h1 className="text-[35px]">ABS</h1>
        <div className="lists hidden lg:flex justify-center items-center space-x-[60px] list-none">
          {lists?.map((item, index) => (
            <Link key={index} href={item?.link ?? "#"}>
              {item.title}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-3">
          <a
            href="https://wa.me/+916002618132/?text=Let%27s%20Talk"
            className="bg-white text-black px-5 py-2 rounded-full"
          >
            Whatsapp
          </a>
          <div className="flex lg:hidden">
            <AlignRight
              onClick={() => {
                setShow(!show);
              }}
            />
          </div>
        </div>
      </div>
      {show && (
        <div className="z-[999] w-screen h-screen bg-white text-black space-y-3 p-8 flex flex-col items-center fixed top-0">
          {lists.map((item, index) => (
            <div
              key={index}
              onClick={() => {
                setShow(false);
              }}
              className="w-full border-2 border-black p-3 rounded-full capitalize text-2xl text-center hover:bg-blue-500 transition-all ease-in-out duration-300 hover:border-red-300 hover:text-white"
            >
              <Link href={item?.link}>{item.title}</Link>
            </div>
          ))}
          <X
            onClick={() => {
              setShow(!show);
            }}
            size={80}
            className="text-red-400 transition-all ease-in-out duration-700 rounded-full hover:bg-red-300"
          />
        </div>
      )}
    </>
  );
};

export default Navbar;
