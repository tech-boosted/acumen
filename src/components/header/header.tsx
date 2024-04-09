import React from "react";
import "./header.css";
import { Logos } from "../../assets/logos";

interface HeaderProps {
  isBgWhite: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isBgWhite }) => {
  return (
    <div className={`header ${isBgWhite ? "header-white-bg" : ""}`}>
      <img
        src={isBgWhite ? Logos.AcumenBlack : Logos.AcumenWhite}
        className="header-logo"
      />
      <div className="header-nav">
        <span className="header-nav-text app-text-extra-bold ">Company</span>
        <span className="header-nav-text app-text-extra-bold ">Brands</span>
        <span className="header-nav-text app-text-extra-bold ">Careers</span>
      </div>
    </div>
  );
};
