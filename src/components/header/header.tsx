import React from "react";
import "./header.css";
import { Logos } from "../../assets/logos";

interface HeaderProps {
  isBgWhite: boolean;
  onClickToggle: () => any;
}

export const Header: React.FC<HeaderProps> = ({ isBgWhite, onClickToggle }) => {
  return (
    <div className={`header ${isBgWhite ? "header-white-bg" : ""}`}>
      <img
        src={isBgWhite ? Logos.AcumenBlack : Logos.AcumenWhite}
        className="header-logo appearing_text_reverse"
      />
      {/* <div className="header-nav">
        <span className="header-nav-text app-text-extra-bold ">Company</span>
        <span className="header-nav-text app-text-extra-bold ">Brands</span>
        <span className="header-nav-text app-text-extra-bold ">Careers</span>
      </div> */}
      <div className="header-right">
        <span className="header-email app-text-dm-regular">
          hello@acumenbrands.co
        </span>
        <div
          className={`menu-toggle appearing_text_reverse ${
            isBgWhite ? "menu-toggle-white-bg" : ""
          }`}
          onClick={onClickToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};
