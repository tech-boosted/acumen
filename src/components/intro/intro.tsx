import React from "react";
import { Logos } from "../../assets/logos";
import "./intro.css";
import { Images } from "../../assets";
// import { useGSAP } from "@gsap/react";
// import { ScrollTrigger } from "gsap/all";
// import gsap from "gsap";

// gsap.registerPlugin(ScrollTrigger);

export const Intro: React.FC<any> = () => {
  // useGSAP(() => {
  //   gsap.to(
  //     [
  //       ".intro-section-1",
  //       ".foundation-text-container",
  //       ".foundation-text",
  //       ".foundation-img",
  //     ],
  //     {
  //       x: -50,
  //       opacity: function (index, target) {
  //         if (index === 0) {
  //           return -1.5;
  //         }
  //         return 1;
  //       },
  //       scrollTrigger: {
  //         trigger: ".intro",
  //         start: "top top",
  //         end: "80% top",
  //         pin: ".intro",
  //         scrub: 2,
  //         // markers: true,
  //       },
  //     }
  //   );
  // });

  return (
    <div className="intro">
      <div className="intro-section-1">
        <img src={Logos.AcumenWhite} className="intro-logo" />
        <span className="intro-logo-text app-text-extra-bold">
          Acumen Brands
        </span>
        <span className="intro-text app-text-dm-regular ">\AK-yoo-mun\ </span>
        <span className="intro-text app-text-dm-regular ">Greek. Noun. </span>
        <span className="intro-text-small app-text-dm-regular ">
          : Something at an extreme height or depth. Peak of perception, or
          discernment, especially in practical matters.
        </span>
        <span className="intro-logo-text app-text-extra-bold">
          Packed in Glory, Wrapped in Story
        </span>
      </div>
    </div>
  );
};
