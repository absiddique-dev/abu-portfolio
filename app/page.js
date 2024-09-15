"use client";

import WorkExperience from "./components/WorkExperience";

import { CardHoverEffectDemo } from "./custom-ui/CardHoverEffectDemo";
import { Roles } from "./custom-ui/Roles";
import { HeroHighlightComp } from "./custom-ui/HeroHighlight";
import { HeroParallaxDemo } from "./custom-ui/HeroParallax";
import Team from "./custom-ui/Team";
import Navbar from "./custom-ui/Navbar";
import { WobbleCardDemo } from "./custom-ui/WobleCard";
import Script from "next/script";

export default function Home() {
  return (
    <div className="text-white">
      <Navbar />
      <div className="main pt-[70px] px-5 md:px-11 lg:px-[200px] flex flex-col items-center py-4 bg-[#12071F] w-screen">
        <div className="flex flex-col lg:flex-row justify-between items-center mt-11">
          <div className="relative">
            <div className="profile flex justify-center items-center w-[300px] h-[350px] rounded-full bg-gradient-radial from-[#483167] via-[#27104C] to-[#180931] shadow-2xl filter blur-xl relative"></div>
            <img
              src="assests/logos/Me.png"
              alt=""
              className="w-[250px] h-[250px] absolute z-3 inset-0 mx-auto my-auto"
            />
            <img
              src="assests/arrow.png"
              alt=""
              className="w-[120px] h-[120px] absolute z-50 top-[-30px] right-10"
            />
            <h1 className="absolute top-0 right-0 lg:top-[-10px] lg:right-[-140px]">
              <span className="hidden lg:flex">
                Hello! I am&nbsp;
                <span className="text-[#7027BA]"> Abu Bakkar</span>
              </span>
              <span className="lg:hidden">
                Hello! I am <br />{" "}
                <span className="text-[#7027BA]">Abu Bakkar</span>
              </span>
            </h1>
          </div>

          <div className="profile-details flex-1 px-[20px] flex items-center">
            <div className="w-full flex flex-col justify-center">
              <p className="underline text-[12px] text-start">
                A Developer who
              </p>
              <div className="relative lg:w-[450px]">
                <div className="text-[25px] lg:text-[40px] w-full text-nowrap">
                  <span className="text-nowrap">Judges a book</span> <br /> by
                  its <span className="text-[#7027BA]">cover</span> ....
                </div>
                <img
                  src="/assests/round-border.png"
                  alt=""
                  className="w-[100px] lg:w-[150px] absolute  bottom-1 left-[73px] lg:bottom-2 lg:left-[115px]"
                />
              </div>
              <p className="text-[12px]">
                Because If the cover does not impress you what else can?
              </p>
            </div>
          </div>
        </div>
        <Roles />
        <CardHoverEffectDemo />
        <WobbleCardDemo />
        <WorkExperience />
      </div>
      <HeroHighlightComp />
      <HeroParallaxDemo />
      <Team />
      <div className="bg-[#12071F]">
        <div
          className="visme_d border border-white"
          data-title="Untitled Project"
          data-url="epqkpkw1-untitled-project?fullPage=true"
          data-domain="forms"
          data-full-page="false"
          data-min-height="80vh"
          data-form-id="85021"
        ></div>
        <Script src="https://static-bundles.visme.co/forms/vismeforms-embed.js"></Script>
      </div>
    </div>
  );
}
