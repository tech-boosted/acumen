import React from "react";
import "./header.css";
import { Logos } from "../../assets/logos";

export const Header: React.FC<any> = () => {
  return (
    <div className="header">
      <img src={Logos.AcumenWhite} className="header-logo" />
      <div className="header-nav">
        <span className="header-nav-text app-text-extra-bold ">Company</span>
        <span className="header-nav-text app-text-extra-bold ">Brands</span>
        <span className="header-nav-text app-text-extra-bold ">Careers</span>
      </div>
    </div>
  );
};
