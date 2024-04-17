import React from "react";
import "./brands.css";
import { Images, Logos } from "../../assets";

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
  const brands = [
    {
      logo1: Logos.Ammo1,
      logo2: Logos.Ammo2,
      title: "Ammo Grips",
    },
    {
      logo1: Logos.Absolute1,
      logo2: Logos.Absolute2,
      title: "Absolute Coffee",
    },
    {
      logo1: Logos.Aphrobite1,
      logo2: Logos.Aphrobite2,
      title: "Aphrobite Gums",
    },
    {
      logo1: Logos.Armour1,
      logo2: Logos.Armour2,
      title: "Armour Mens",
    },
    {
      logo1: Logos.Audr1,
      logo2: Logos.Audr2,
      title: "AuDr",
    },
  ];

  return (
    <div className={`brands`} id={sectionId} ref={brandsRef}>
      <span
        className={`brands-heading app-text-regular ${
          isVisible ? "appearing_text" : ""
        }`}
      >
        Our Brands
      </span>
      <div className="brands-list">
        {brands?.map((brand, index) => {
          return (
            <div className="brand-box">
              <div
                className="brand-box-img-container"
                onClick={() => window.open("https://ammogrips.com", "_blank")}
              >
                <div className="overlay-box">
                  <img src={brand?.logo2} className="overlay-img" />
                </div>
                <img
                  src={brand?.logo1}
                  className={`brand-img ${isVisible ? "appearing_text" : ""}`}
                />
              </div>
              {/* <span
                className={`brand-box-text app-text-extra-bold ${
                  isVisible ? "appearing_text" : ""
                }`}
              >
                {brand?.title}
              </span> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};
