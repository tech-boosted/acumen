import React, { useEffect, useState } from "react";
import {
  Brands,
  Company,
  Foundation,
  Header,
  Intro,
  WhatWeDo,
} from "./components";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./App.css";
import { ScrollTrigger } from "gsap/all";

export const App = () => {
  const containerEl = document.getElementById("#app")!;

  const [whatWeDoVisible, setWhatWeDoVisible] = useState(false);
  const [companyVisible, setCompanyVisible] = useState(false);
  const [foundationVisible, setFoundationVisible] = useState(false);

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
      const whatWeDoSection = document.getElementById("id-what-we-do");
      const companySection = document.getElementById("id-company");
      const foundationSection = document.getElementById("id-foundation");

      if (whatWeDoSection) {
        const sectionRect = whatWeDoSection.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        // Check if section is at least 50% visible
        if (
          sectionRect.bottom >= 0 &&
          sectionRect.top <= windowHeight / 2 &&
          !(sectionRect.bottom <= windowHeight / 2)
        ) {
          setWhatWeDoVisible(true);
        } else {
          setWhatWeDoVisible(false);
        }
      }

      if (companySection) {
        const sectionRect = companySection.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (
          sectionRect.bottom >= 0 &&
          sectionRect.top <= windowHeight / 2 &&
          !(sectionRect.bottom <= windowHeight / 2)
        ) {
          setCompanyVisible(true);
        }
      }

      if (foundationSection) {
        const sectionRect = foundationSection.getBoundingClientRect();
        const windowWidth =
          window.innerWidth || document.documentElement.clientWidth;
        if (
          sectionRect.right >= 0 &&
          sectionRect.left <= windowWidth / 2 &&
          !(sectionRect.right <= windowWidth / 2)
        ) {
          setFoundationVisible(true);
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
  }, [containerEl]);

  return (
    <div
      className={`App ${whatWeDoVisible ? "App-white" : ""}`}
      id="app"
      data-scroll-container
    >
      <Header isBgWhite={whatWeDoVisible} />
      <div style={{ display: "flex" }} className="intro-horizontal">
        <Intro />
        <Foundation sectionId={"id-foundation"} isVisible={foundationVisible} />
      </div>
      <Brands />
      <WhatWeDo sectionId={"id-what-we-do"} isVisible={whatWeDoVisible} />
      <Company sectionId={"id-company"} isVisible={companyVisible} />
    </div>
  );
};
