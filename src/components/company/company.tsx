import React from "react";
import "./company.css";
import { Images } from "../../assets/images";
import { Parallax, useParallax } from "react-scroll-parallax";

interface CompanyProps {
  isVisible: boolean;
  sectionId: string;
  companyRef: any;
}

export const Company: React.FC<CompanyProps> = ({
  isVisible,
  sectionId,
  companyRef,
}) => {
  // const { ref } = useParallax({ speed: 10 });
  return (
    <div
      className={`company ${isVisible ? "appears" : ""}`}
      id={sectionId}
      ref={companyRef}
    >
      <div className="company-section-1">
        <div className="company-text-container">
          <span
            className={`company-heading app-text-dm-regular ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            About us
          </span>
          <span
            className={`company-subheading app-text-regular  ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            From idea to Scale
          </span>
          <span
            className={`company-text app-text-dm-regular  ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            Acumen is a rapidly growing consumer e-commerce company that is
            transforming the way brands are built & scaled.
          </span>
          <span
            className={`company-text app-text-dm-regular  ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            We aim to empower breakthrough products, distinguished brands, and
            consumers' individuality; through constant innovation,
            transformative characteristics, and deep learning.
          </span>
          <span
            className={`company-text app-text-dm-regular  ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            Our principles are:
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
          <span
            className={`company-text app-text-dm-regular  ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            End-to-End Alignment: We prioritize operations alignment from the
            outset, ensuring all components function as a cohesive whole.{" "}
          </span>
          <span
            className={`company-text app-text-dm-regular  ${
              isVisible ? "appearing_text" : ""
            }`}
          >
            This holistic approach grants Acumen a distinct advantage – the
            ability to turbocharge operations and drive efficient,
            results-oriented expansion in all directions by proactively
            addressing manufacturing and supply chain considerations during the
            initial brand-building phase, we equip our clients for aggressive
            and efficient global domination.​
          </span>
        </div>
        <div className="company-img-container">
          <Parallax translateY={[20, -15]} speed={-5}>
            <img
              // ref={ref}
              src={Images.Img35}
              className={`company-img `}
              // className={`company-img ${isVisible ? "appearing_text" : ""}`}
            />
          </Parallax>
        </div>
      </div>
      {/* <div className="company-section-2">
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
      </div> */}
    </div>
  );
};
