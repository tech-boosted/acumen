import React from "react";
import "./brands.css";
import { Images } from "../../assets";

export const Brands: React.FC<any> = () => {
  return (
    <div className="brands">
      <span className="brands-heading app-text-regular">OUR BRANDS</span>
      <div className="brands-list">
        <div className="brand-box">
          <div
            className="brand-box-img-container"
            onClick={() => window.open("https://ammogrips.com", "_blank")}
          >
            <div className="overlay-box">
              <img src={Images.AmmoLogo} className="overlay-img" />
            </div>
            <img src={Images.Ammo} className="brand-img" />
          </div>
          <span className="brand-box-text app-text-extra-bold">Ammo Grips</span>
        </div>
      </div>
    </div>
  );
};
