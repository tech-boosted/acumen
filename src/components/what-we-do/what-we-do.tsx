import React from "react";
import "./what-we-do.css";
import { Images } from "../../assets/images";

interface WhatWeDoProps {
  sectionId: string;
  isVisible: boolean;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ sectionId, isVisible }) => {
  return (
    <div
      className={`what-we-do ${isVisible ? "what-we-do-visible" : ""}`}
      id={sectionId}
    >
      <div className="what-we-do-text-container">
        <span className="what-we-do-heading app-text-regular">What we do?</span>
        <span className="what-we-do-text-section-1 what-we-do-text app-text-dm-regular">
          We build and grow global brands that are loved by customers, driven by
          communities, and are purposed to change the world. Brands that have
          distinct identities, celebrate a customer's individuality and harness
          the power of highly sophisticated intelligence.
          {/* Driven by belief in a brand's unique positioning,
          innovative solution and captivating story, we nurture brands that are
          solutions with remarkable stories that resonate and cater to a
          consumer's unique and bespoke needs. */}
        </span>
        <div className="what-we-do-text-section-2 ">
          <div className="what-we-do-column">
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
              process, and then build a brand accordingly.
            </p>
            <span className="what-we-do-text app-text-dm-regular">
              Leverage Reaearch and Data
              <br /> Create Branding and Experience
              <br /> Enhance Product and Brand Development
              <br /> Harness Performance and Growth
            </span>
          </div>
        </div>
        {/* <ol>
          <li className="what-we-do-text app-text-dm-regular">
            We work with top-tier Market research companies to identify sizeable
            consumption trends in the market and use that research as a thesis
            for product/brand development.
          </li>
          <li className="what-we-do-text app-text-dm-regular">
            We work with leading consumer behaviour companies to develop
            consumer brands & experiences such as Product development, Branding,
            packaging, cataloguing etc.
          </li>
          <li className="what-we-do-text app-text-dm-regular">
            Leverage the Brand story, customer connections and similar affinity
            base to build a community around the brand to grow sales
            organically, and acquire loyal customers.
          </li>
          <li className="what-we-do-text app-text-dm-regular">
            We harness top Technologies, Advertising solutions, Tech Stacks and
            creative content to drive growth and penetration through Performance
            marketing, PR and Advertising.
          </li>
          <li className="what-we-do-text app-text-dm-regular">
            Once the Brand stabilises in the local market, we use a data-driven
            approach to identify the next suitable market Globally or
            Continentally and penetrate it through partnerships.
          </li>
        </ol> */}
      </div>
      {/* <div className="what-we-do-img-container">
        <img src={Images.Img25NoBg} className="what-we-do-img" />
      </div> */}
    </div>
  );
};
