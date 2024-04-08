import React, { useEffect, useRef } from "react";
import { Logos } from "../../assets/logos";
import LocomotiveScroll from "locomotive-scroll";
import "./intro.css";

export const Intro: React.FC<any> = () => {
  const scrollRef = useRef<any>(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      // Add more options as needed
    });

    return () => {
      // Clean up Locomotive Scroll instance on unmount
      scroll.destroy();
    };
  }, []);
  return (
    <div className="intro" ref={scrollRef}>
      <img src={Logos.AcumenBrandsWhite} className="intro-logo" />
      <span className="intro-text app-text-extra-bold">
        Packed in Glory, Wrapped in Story.
      </span>
    </div>
  );
};
