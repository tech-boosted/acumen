import React from "react";
import "./company.css";
import { Images } from "../../assets/images";

interface CompanyProps {
  isVisible: boolean;
  sectionId: string;
}

export const Company: React.FC<CompanyProps> = ({ isVisible, sectionId }) => {
  return (
    <div
      className={`company ${isVisible ? "appears" : ""}`}
      id={sectionId}
      data-scroll-section
    >
      <div className="company-img-container">
        <img
          src={Images.Img21NoBg}
          className={`company-img ${isVisible ? "appearing_text" : ""}`}
        />
      </div>
      <div className="company-text-container">
        <span
          className={`company-heading app-text-regular ${
            isVisible ? "appearing_text" : ""
          }`}
        >
          Our Purpose
        </span>
        <span
          className={`company-text app-text-dm-regular  ${
            isVisible ? "appearing_text" : ""
          }`}
        >
          We build and grow global brands that are loved by customers, driven by
          communities, and are purposed to change the world.
        </span>
        <span
          className={`company-text app-text-dm-regular  ${
            isVisible ? "appearing_text" : ""
          }`}
        >
          We envision a future where Acumen transcends traditional definitions
          of commerce and become a catalyst in enabling the exploration of
          consumers' individuality and brands' purpose to impact the world.
        </span>
        <span
          className={`company-text app-text-dm-regular  ${
            isVisible ? "appearing_text" : ""
          }`}
        >
          Our mission is to revolutionize the way brands are created and
          perceived. "We give birth to brands that embody personality,
          individuality, and purpose.
        </span>
      </div>
    </div>
  );
};
