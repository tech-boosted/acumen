import React from "react";
import "./brands.css";
import { Images } from "../../assets";

interface BrandsProps {
  sectionId: string;
  isVisible: boolean;
  brandsRef: any;
}

export const Brands: React.FC<BrandsProps> = ({
  sectionId,
  isVisible,
  brandsRef,
}) => {
  return (
    <div className={`brands`} id={sectionId} ref={brandsRef}>
      <span
        className={`brands-heading app-text-regular ${
          isVisible ? "appearing_text" : ""
        }`}
      >
        OUR BRANDS
      </span>
      <div className="brands-list">
        <div className="brand-box">
          <div
            className="brand-box-img-container"
            onClick={() => window.open("https://ammogrips.com", "_blank")}
          >
            <div className="overlay-box">
              <img src={Images.AmmoLogo} className="overlay-img" />
            </div>
            <img
              src={Images.Ammo}
              className={`brand-img ${isVisible ? "appearing_text" : ""}`}
            />
          </div>
          <span
            className={`brand-box-text app-text-extra-bold ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            Ammo Grips
          </span>
        </div>
      </div>
    </div>
  );
};
