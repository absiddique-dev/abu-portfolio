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
