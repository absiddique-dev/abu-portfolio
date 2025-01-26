"use client";
import React from "react";

const Page = () => {
  return (
    <div className="bg-[#AAA79E] h-screen w-screen text-white px-11 py-11">
      <div className="h-full w-full shadow-lg relative">
        <div className="w-full h-1/2 bg-white"></div>
        <div className="w-full h-1/2 bg-[#C5C2BB]"></div>
        <div className="profile-dp w-[400px] h-[400px] rounded-full bg-[#D7D0D0] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <img
            src="/assests/abs-bg-remove.png"
            alt="abu bakkar siddique"
            className="w-full h-full object-cover rounded-full animate-pulse"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
