import React from "react";
import { Logos } from "../../assets/logos";
import "./intro.css";

export const Intro: React.FC<any> = () => {
  return (
    <div className="intro" data-scroll-section>
      <img src={Logos.AcumenBrandsWhite} className="intro-logo" />
      <span className="intro-text app-text-extra-bold">
        Packed in Glory, Wrapped in Story.
      </span>
    </div>
  );
};
