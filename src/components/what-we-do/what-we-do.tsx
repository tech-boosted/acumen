import React, { useRef } from "react";
import "./what-we-do.css";
import { Images } from "../../assets/images";
import { useOnScreen } from "../../hooks";

interface WhatWeDoProps {
  sectionId: string;
  isVisible: boolean;
}

export const WhatWeDo: React.FC<WhatWeDoProps> = ({ sectionId, isVisible }) => {
  return (
    <div
      className={`what-we-do ${isVisible ? "what-we-do-visible" : ""}`}
      id={sectionId}
      data-scroll-section
    >
      <div className="what-we-do-img-container">
        <img src={Images.Img25} className="what-we-do-img" />
      </div>
      <div className="what-we-do-text-container">
        <span className="what-we-do-heading app-text-regular">What we do</span>
        <span className="what-we-do-text app-text-dm-regular">
          We build and grow global brands that are loved by customers, driven by
          communities, and are purposed to change the world.
          <br />
          <br />
          Brands that have distinct identities, celebrate a customer's
          individuality, and harness the power of highly sophisticated
          intelligence. Driven by belief in a brand's unique positioning,
          innovative solution and captivating story, we nurture brands that are
          solutions with remarkable stories that resonate and cater to a
          consumer's unique and bespoke needs.
        </span>
      </div>
    </div>
  );
};
