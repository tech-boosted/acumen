import React from "react";
import "./menu.css";

interface MenuProps {
  menuActive: boolean;
  onClose: () => any;
}

export const Menu: React.FC<MenuProps> = ({ menuActive, onClose }) => {
  return (
    <div className={`menu ${menuActive ? "menu-active" : ""} `}>
      <div className="close-box" onClick={onClose}>
        <div className="close">
          <span className="close-arc-1"></span>
          <span className="close-arc-2"></span>
        </div>
      </div>
      <div className="menu-text-container">
        <span
          className={`menu-nav-text app-text-extra-bold ${
            menuActive ? "menu-nav-text-animate option-1" : ""
          } `}
        >
          About us
        </span>
        <span
          className={`menu-nav-text app-text-extra-bold ${
            menuActive ? "menu-nav-text-animate option-2" : ""
          } `}
        >
          Brands
        </span>
        {/* <span
          className={`menu-nav-text app-text-extra-bold ${
            menuActive ? "menu-nav-text-animate option-3" : ""
          } `}
        >
          Careers
        </span> */}
        <span
          className={`menu-nav-text app-text-extra-bold ${
            menuActive ? "menu-nav-text-animate option-3" : ""
          } `}
        >
          Contact
        </span>
      </div>
    </div>
  );
};
