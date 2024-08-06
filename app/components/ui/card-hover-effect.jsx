"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="w-full flex flex-col justify-center">
        <p className="text-center text-[#6F27BA] text-[15px]">
          How Can I help?
        </p>
        <h1 className="text-[25px] lg:text-[40px] text-center">Services</h1>
      </div>
      <div className={cn("grid grid-cols-1 xl:grid-cols-2 py-10", className)}>
        {items.map((item, idx) => (
          <div
            key={idx}
            className="relative group block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <>
                <div className="flex items-center gap-x-5">
                  {" "}
                  <div className="bg-red-500 w-[40px] h-[0.5px]"></div>
                  <span className="text-[20px]">{item.serial}</span>
                </div>
                <div className="flex flex-col">
                  <h1 className="text-[30px] py-5 uppercase text-wrap lg:text-nowrap">
                    {item.title}
                  </h1>
                  <p className="text-[15px]">{item.description}</p>
                </div>
              </>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-gray-400 hover:border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
