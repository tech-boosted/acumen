import React from "react";
import "./company.css";
import { Images } from "../../assets/images";

interface CompanyProps {
  isVisible: boolean;
  sectionId: string;
}

export const Company: React.FC<CompanyProps> = ({ isVisible, sectionId }) => {
  return (
    <div className={`company ${isVisible ? "appears" : ""}`} id={sectionId}>
      <div className="company-section-1">
        <div className="company-text-container">
          <span
            className={`company-heading app-text-regular ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            About Us
          </span>
          {/* <span
            className={`company-text app-text-dm-regular  ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            Acumen
            <br /> \AK-yoo-mun\ Greek.
            <br /> Noun. : Something at an extreme height or depth. Peak of
            perception, or discernment, especially in practical matters.
            <br />
            Similar: awareness, insight, heightened, wisdom, vision.
          </span> */}
          <span
            className={`company-text app-text-dm-regular  ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            Acumen is a rapidly growing consumer e-commerce company that is
            transforming the way consumer brands are built & scaled.
          </span>
          <span
            className={`company-text app-text-dm-regular  ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            Purpose: Acumen's purpose is to empower breakthrough products,
            distinguished brands, and consumers' individuality; through constant
            innovation, transformative characteristics, and deep learning. "We
            build and grow global brands that are loved by customers, driven by
            communities, and are purposed to change the world."
          </span>
          <span
            className={`company-text app-text-dm-regular  ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            Data Driven: Building brands powered by highly sophisticated Market
            research and Consumer behaviour reports.
          </span>
          <span
            className={`company-text app-text-dm-regular  ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            Controlled Execution: Being part of the brand right from the
            inception with well-executed product research, supply chain, design,
            branding, marketing, and distribution.
          </span>
        </div>
        <div className="company-img-container">
          <img
            src={Images.Img21NoBg}
            className={`company-img ${isVisible ? "appearing_text" : ""}`}
          />
        </div>
      </div>
      <div className="company-section-2">
        <span
          className={`company-text app-text-dm-regular  ${
            isVisible ? "appearing_text" : ""
          }`}
        >
          End-to-End Alignment: Acumen recognizes that global brand success
          hinges on meticulous orchestration. Just local and international
          expansion efforts fall short without a unified approach to backward
          integration (manufacturing & supply chain) and forward momentum
          (market penetration & global partnerships). We prioritize stakeholder
          alignment from the outset, ensuring all components function as a
          cohesive whole.
        </span>
        <span
          className={`company-text app-text-dm-regular  ${
            isVisible ? "appearing_text" : ""
          }`}
        >
          This holistic approach grants Acumen a distinct advantage – the
          ability to turbocharge operations and drive efficient,
          results-oriented expansion in all directions. By proactively
          addressing manufacturing and supply chain considerations during the
          initial brand-building phase, we equip our clients for aggressive and
          efficient global domination.​
        </span>
      </div>
    </div>
  );
};
