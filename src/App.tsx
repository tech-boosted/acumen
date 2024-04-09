import React, { MutableRefObject, useEffect, useRef, useState } from "react";
import { Company, Header, Intro, WhatWeDo } from "./components";
import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/src/locomotive-scroll.scss";
import "./App.css";

export const App = () => {
  const containerEl = document.getElementById("#app")!;

  const [isVisible, setIsVisible] = useState(false);

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
      const scroll = new LocomotiveScroll({
        el: containerEl,
        smooth: true,
      });
    }
  }, [containerEl]);

  return (
    <div
      className={`App ${isVisible ? "App-white" : ""}`}
      id="app"
      data-scroll-container
    >
      <Header isBgWhite={isVisible} />
      <Intro />
      <WhatWeDo sectionId={"id-what-we-do"} isVisible={isVisible} />
      <Company isVisible={!isVisible} />
    </div>
  );
};
