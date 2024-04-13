import React from "react";
import { Images } from "../../assets/images";
import "./foundation.css";

interface FoundationProps {
  isVisible: boolean;
  sectionId: string;
}

export const Foundation: React.FC<FoundationProps> = ({
  isVisible,
  sectionId,
}) => {
  return (
    <div
      className="foundation horizontal-section"
      data-scroll-section
      id={sectionId}
    >
      <div className="foundation-text-container">
        <span
          className={`foundation-text foundation-text-1 app-text-extra-bold ${
            isVisible ? "appearing_text" : ""
          }`}
        >
          Celebration of Individuality
        </span>
        <span
          className={`foundation-text foundation-text-2 app-text-extra-bold ${
            isVisible ? "appearing_text" : ""
          }`}
        >
          Creation of Identity
        </span>
        <span
          className={`foundation-text foundation-text-3 app-text-extra-bold ${
            isVisible ? "appearing_text" : ""
          }`}
        >
          Harnessing Insights
        </span>
      </div>
      <img
        src={Images.Img20NoBg}
        className={`foundation-img ${isVisible ? "appearing_text" : ""}`}
      />
    </div>
  );
};
