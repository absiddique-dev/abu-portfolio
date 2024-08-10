"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "../components/ui/woble-card";

export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Crafting Digital Experiences
          </h2>
          <p className="mt-4 text-left text-base/6 text-neutral-200">
            Our team specializes in creating high-performance, responsive
            websites and mobile apps that drive engagement and growth. Trust us
            to bring your vision to life with precision and creativity.
          </p>
        </div>
        <img
          src=""
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] filter -bottom-10 object-contain rounded-2xl w-[300px]"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Innovating Beyond Boundaries
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
          In the world of digital creation, pushing limits is essential. But
          when collaboration requires clarity, respect, and precision, we know
          when to pause, reflect, and recalibrate.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Digital Presence with Premier Web & App Development
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-neutral-200">
            Our team is dedicated to transforming your vision into reality with
            expertly crafted websites and apps. We combine innovative design
            with strategic development to deliver exceptional, user-centric
            solutions that drive meaningful results and growth.
          </p>
        </div>
      </WobbleCard>
    </div>
  );
}
