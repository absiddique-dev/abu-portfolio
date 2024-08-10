// import {  } from "../ui/card-hover-effect";
"use state";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    serial: "01",
    title: "Web Development",
    description:
      "Our team has successfully delivered more than 50+ web development projects in past years. We master in creating responsive, high- performance, SEO optimize and user friendly websites with top notch UI/UX that not only look great but also drive results. From e-commerce platforms to custom web applications. Trust us to bring your vision to life with precision and creativity.",
  },
  {
    serial: "02",
    title: "App Development",
    description:
      "Our team specializes in creating high-performance mobile apps that are both user-friendly and visually stunning. Whether you need a powerful Android application, or a cross-platform solution, we've got you covered. From concept to launch, we ensure that your app is built to engage users and deliver seamless experiences.",
  },
  {
    serial: "03",
    title: "Graphic Design",
    description:
      "We craft visually compelling designs that make your brand stand out. Our graphic design services range from logo creation to full branding packages, ensuring that every element resonates with your target audience. With a keen eye for detail and a passion for creativity, we deliver designs that leave a ever lasting impression.",
  },
  {
    serial: "04",
    title: "SEO for YouTube",
    description:
      "Boost your YouTube presence with our expert SEO services. We help your videos reach a wider audience by optimizing titles, descriptions, tags, and more. Our approach is data-driven and focused on increasing your channel's visibility, engagement, and subscriber growth, so you can maximize your impact on the platform.",
  },
];
