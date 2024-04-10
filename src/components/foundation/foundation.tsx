import React from "react";
import { Images } from "../../assets/images";
import "./foundation.css";

export const Foundation: React.FC<any> = () => {
  return (
    <div className="foundation horizontal-section" data-scroll-section>
      <div className="foundation-text-container">
        <span className="foundation-text foundation-text-1 app-text-extra-bold">
          Celebration of Individuality
        </span>
        <span className="foundation-text foundation-text-2 app-text-extra-bold">
          Creation of Identity
        </span>
        <span className="foundation-text foundation-text-3 app-text-extra-bold">
          Harnessing Insights
        </span>
      </div>
      <img src={Images.Img20NoBg} className="foundation-img" />
    </div>
  );
};
