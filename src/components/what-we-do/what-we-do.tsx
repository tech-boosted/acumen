import React from "react";
import "./what-we-do.css";
import { Images } from "../../assets/images";

interface WhatWeDoProps {
  sectionId: string;
  isVisible: boolean;
  openPitchDesk: () => void;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({
  sectionId,
  isVisible,
  openPitchDesk,
}) => {
  return (
    <div
      className={`what-we-do ${isVisible ? "what-we-do-visible" : ""}`}
      id={sectionId}
    >
      <div className="what-we-do-text-container">
        <span className="what-we-do-heading app-text-regular">What we do?</span>
        <span className="what-we-do-text-section-1 what-we-do-text app-text-dm-regular">
          We build and grow brands that are loved by customers, driven by
          communities, and are purposed to change the world. Our brands have
          distinct identities which celebrate a customer's individuality and
          harness the power of highly sophisticated intelligence.
        </span>
        <div className="what-we-do-text-section-2 ">
          <div className="what-we-do-section-2-row-1">
            <span className="what-we-do-subheading app-text-regular">
              Thesis<span>.</span>
            </span>
            <span className="what-we-do-subheading app-text-regular">
              Our Solution<span>.</span>
            </span>
          </div>
          <div className="what-we-do-section-2-row-2">
            <p className="what-we-do-text app-text-dm-regular">
              Most retailers lack the depth in knowledge of building a consumer
              brand capable of realising the potential to serve Local,
              Continental, and Global consumers.
            </p>
            <p className="what-we-do-text app-text-dm-regular">
              We study 1000+ research backed data points in each aspect of the
              process, and then build a brand accordingly. Every decision of
              ours is backed by high quality Data.
            </p>
          </div>
          <div className="what-we-do-section-2-row-3">
            <span className="what-we-do-text app-text-dm-regular">
              We synergize data and storytelling to solve for:
            </span>
            <span className="what-we-do-text app-text-dm-regular">
              We solve personified problems at every stage:
            </span>
          </div>
          <div className="what-we-do-section-2-row-4">
            <span className="what-we-do-text app-text-dm-regular">
              What to build?
              <br />
              Who to build for?
              <br />
              How to build?
              <br />
              How to Scale?
              <br />
            </span>
            <span className="what-we-do-text app-text-dm-regular">
              Leverage Research and Data.
              <br /> Create Branding and Experience.
              <br /> Enhance Product and Brand Development.
              <br /> Harness Performance and Growth.
            </span>
          </div>
          <div className="download-btn-container">
            <button onClick={openPitchDesk} className="download-btn">
              Download Pitch Deck
            </button>
          </div>
          {/* <div className="what-we-do-column">
            <span className="what-we-do-subheading app-text-regular">
              Thesis<span>.</span>
            </span>
            <p className="what-we-do-text app-text-dm-regular">
              Most retailers lack the depth in knowledge of building a consumer
              brand capable of realising the potential to serve Local,
              Continental, and Global consumers.
            </p>
            <span className="what-we-do-text app-text-dm-regular">
              We synergize data and storytelling to solve for:
            </span>
            <span className="what-we-do-text app-text-dm-regular">
              What to build?
              <br />
              Who to build for?
              <br />
              How to build?
              <br />
              How to Scale?
              <br />
            </span>
          </div>
          <div className="what-we-do-column">
            <span className="what-we-do-subheading app-text-regular">
              Our Solution<span>.</span>
            </span>
            <p className="what-we-do-text app-text-dm-regular">
              We study 1000+ research backed data points in each aspect of the
              process, and then build a brand accordingly. Every decision of
              ours is backed by high quality Data.
            </p>
            <span className="what-we-do-text app-text-dm-regular">
              We solve crucial and personified problems at every stage:
            </span>
            <span className="what-we-do-text app-text-dm-regular">
              Leverage Research and Data.
              <br /> Create Branding and Experience.
              <br /> Enhance Product and Brand Development.
              <br /> Harness Performance and Growth.
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
