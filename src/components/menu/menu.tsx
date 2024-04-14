import React from "react";
import "./menu.css";

interface MenuProps {
  menuActive: boolean;
  onNavigate: (sectionName: "about" | "contact" | "brands") => any;
  onClose: () => any;
}

export const Menu: React.FC<MenuProps> = ({
  menuActive,
  onNavigate,
  onClose,
}) => {
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
          onClick={() => onNavigate("about")}
        >
          About us
        </span>
        <span
          className={`menu-nav-text app-text-extra-bold ${
            menuActive ? "menu-nav-text-animate option-2" : ""
          } `}
          onClick={() => onNavigate("brands")}
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
          onClick={() => onNavigate("contact")}
        >
          Contact
        </span>
      </div>
    </div>
  );
};
