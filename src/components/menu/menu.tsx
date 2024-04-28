import React from "react";
import "./menu.css";

interface MenuProps {
  menuActive: boolean;
  onNavigate: (sectionName: "about" | "contact" | "brands") => any;
  onClose: () => any;
  openPitchDesk: () => void;
}

export const Menu: React.FC<MenuProps> = ({
  menuActive,
  onNavigate,
  onClose,
  openPitchDesk,
}) => {
  return (
    <div className={`menu ${menuActive ? "menu-active" : ""} `}>
      <div className="close-box" onClick={onClose}>
        <div className="close">
          <span className="close-arc-1"></span>
          <span className="close-arc-2"></span>
        </div>
      </div>

      <div className="dummy-div"></div>
      <div></div>

      <div className="menu-text-container">
        <div className=" option-container">
          <span
            className={`menu-nav-text app-text-extra-bold ${
              menuActive ? "menu-nav-text-animate option-1" : ""
            } `}
            onClick={() => onNavigate("about")}
          >
            About
          </span>
          <div></div>
        </div>
        <div className=" option-container">
          <span
            className={`menu-nav-text app-text-extra-bold ${
              menuActive ? "menu-nav-text-animate option-2" : ""
            } `}
            onClick={() => onNavigate("brands")}
          >
            Brands
          </span>

          <div
            className={`menu-download-btn-container  ${
              menuActive ? "appears option-4" : ""
            } `}
          >
            <button onClick={openPitchDesk} className="menu-download-btn">
              Download Pitch Deck
            </button>
          </div>
        </div>
        {/* <span
          className={`menu-nav-text app-text-extra-bold ${
            menuActive ? "menu-nav-text-animate option-3" : ""
          } `}
          >
          Careers
        </span> */}
        <div className=" option-container">
          <span
            className={`menu-nav-text app-text-extra-bold ${
              menuActive ? "menu-nav-text-animate option-3" : ""
            } `}
            onClick={() => onNavigate("contact")}
          >
            Contact
          </span>
          <div></div>
        </div>
      </div>

      {/* <div
        className={`menu-download-btn-container  ${
          menuActive ? "appears option-4" : ""
        } `}
      >
        <button onClick={openPitchDesk} className="menu-download-btn">
          Download Pitch Deck
        </button>
      </div> */}

      <div className="menu-footer-container">
        <div className="menu-footer-left">
          <span className="app-text-dm-regular ">hello@acumenbrands.co</span>
        </div>
        <div className="menu-footer-right">
          <span
            className="menu-link app-text-dm-regular "
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=61557711785172&mibextid=ZbWKwL",
                "_blank"
              )
            }
          >
            Facebook
          </span>
          <span
            className="menu-link app-text-dm-regular "
            onClick={() =>
              window.open(
                "https://www.linkedin.com/company/acumen-brands/",
                "_blank"
              )
            }
          >
            Linkedin
          </span>
          <span
            className="menu-link app-text-dm-regular "
            onClick={() =>
              window.open("https://www.instagram.com/acumen_brands", "_blank")
            }
          >
            Instagram
          </span>
        </div>
      </div>
    </div>
  );
};
