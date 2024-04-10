import React from "react";
import "./company.css";
import { Images } from "../../assets/images";

interface CompanyProps {
  isVisible: boolean;
}

export const Company: React.FC<CompanyProps> = ({ isVisible }) => {
  return (
    <div
      className={`company ${isVisible ? "company-visible" : ""}`}
      data-scroll-section
    >
      <div className="company-img-container">
        <img src={Images.Img21NoBg} className="company-img" />
      </div>
      <div className="company-text-container">
        <span className="company-heading app-text-regular">Our Purpose</span>
        <span className="company-text app-text-dm-regular">
          We build and grow global brands that are loved by customers, driven by
          communities, and are purposed to change the world.
        </span>
        <span className="company-text app-text-dm-regular">
          We envision a future where Acumen transcends traditional definitions
          of commerce and become a catalyst in enabling the exploration of
          consumers' individuality and brands' purpose to impact the world.
        </span>
        <span className="company-text app-text-dm-regular">
          Our mission is to revolutionize the way brands are created and
          perceived. "We give birth to brands that embody personality,
          individuality, and purpose.
        </span>
      </div>
    </div>
  );
};