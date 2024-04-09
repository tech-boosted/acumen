import React, { useEffect, useRef, useState } from "react";
import "./App.css";
import { Company, Header, Intro, WhatWeDo } from "./components";
import { useOnScreen } from "./hooks";

export const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("id-what-we-do");
      if (section) {
        const sectionRect = section.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        // Check if section is at least 50% visible
        console.log("sectionRect: ", sectionRect);
        console.log("windowHeight: ", windowHeight);

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

  console.log("isVisible: ", isVisible);

  return (
    <div className={`App ${isVisible ? "App-white" : ""}`}>
      <Header isBgWhite={isVisible} />
      <Intro />
      <WhatWeDo sectionId={"id-what-we-do"} isVisible={isVisible} />
      <Company />
    </div>
  );
};
