import React, { useEffect, useState } from "react";
import { Company, Foundation, Header, Intro, WhatWeDo } from "./components";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";
import { ScrollTrigger } from "gsap/all";

export const App = () => {
  const containerEl = document.getElementById("#app")!;
  const container2El = document.getElementById("#introContainer")!;

  const [isVisible, setIsVisible] = useState(false);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".horizontal-section");
    console.log("sections: ", sections);
    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".intro-horizontal",
        // start: "0",
        // end: "120%",
        pin: true,
        scrub: 1,
        // markers: true,
      },
    });
  });

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("id-what-we-do");
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        // Check if section is at least 50% visible
        if (
          sectionRect.bottom >= 0 &&
          sectionRect.top <= windowHeight / 2 &&
          !(sectionRect.bottom <= windowHeight / 2)
        ) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (containerEl) {
      new LocomotiveScroll({
        el: containerEl,
        smooth: true,
      });
    }
  }, [containerEl, container2El]);

  return (
    <div
      className={`App ${isVisible ? "App-white" : ""}`}
      id="app"
      data-scroll-container
    >
      <Header isBgWhite={isVisible} />
      <div
        style={{ display: "flex" }}
        className="intro-horizontal"
        // data-scroll-section
        // data-scroll-direction="horizontal"
      >
        <Intro />
        <Foundation />
      </div>
      <WhatWeDo sectionId={"id-what-we-do"} isVisible={isVisible} />
      <Company isVisible={!isVisible} />
    </div>
  );
};
