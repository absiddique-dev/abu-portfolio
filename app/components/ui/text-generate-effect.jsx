"use client";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({ words, className }) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 1.0 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (inView) {
      animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
    }
  }, [inView, scope.current]);

  const renderWords = () => (
    <motion.div ref={scope}>
      {wordsArray.map((word, idx) => (
        <motion.span key={word + idx} className="text-white opacity-0">
          {word}{" "}
        </motion.span>
      ))}
    </motion.div>
  );

  return (
    <div ref={containerRef} className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
