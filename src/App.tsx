import React, { useEffect, useRef, useState } from "react";
import {
  Brands,
  Company,
  Decolines,
  Footer,
  Header,
  Intro,
  Loader,
  Menu,
  Pitch,
  WhatWeDo,
} from "./components";
import "./App.css";

export const App = () => {
  const aboutUsRef = useRef<HTMLElement>(null);
  const brandsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const [pitchDeckModal, setPitchDeckModal] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [whatWeDoVisible, setWhatWeDoVisible] = useState(false);
  const [companyVisible, setCompanyVisible] = useState(false);
  const [brandsVisible, setBrandsVisible] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);

  const scrollToSection = (sectionName: "about" | "brands" | "contact") => {
    if (sectionName === "about") {
      setTimeout(() => {
        aboutUsRef?.current?.scrollIntoView();
      }, 100);
      setTimeout(() => {
        setMenuActive(false);
      }, 500);
    }
    if (sectionName === "brands") {
      setTimeout(() => {
        brandsRef?.current?.scrollIntoView();
      }, 100);
      setTimeout(() => {
        setMenuActive(false);
      }, 500);
    }
    if (sectionName === "contact") {
      setTimeout(() => {
        contactRef?.current?.scrollIntoView();
      }, 100);
      setTimeout(() => {
        setMenuActive(false);
      }, 500);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const whatWeDoSection = document.getElementById("id-what-we-do");
      const companySection = document.getElementById("id-company");
      const brandsSection = document.getElementById("id-brands");

      if (whatWeDoSection) {
        const sectionRect = whatWeDoSection.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (
          sectionRect.top <= windowHeight / 2 &&
          sectionRect.bottom >= 0 &&
          !(sectionRect.bottom <= windowHeight - 200)
        ) {
          setWhatWeDoVisible(true);
        } else {
          setWhatWeDoVisible(false);
        }
      }

      if (companySection) {
        const sectionRect = companySection.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (
          sectionRect.top <= windowHeight - 200 &&
          sectionRect.bottom >= windowHeight - 500
        ) {
          setCompanyVisible(true);
        } else {
          setCompanyVisible(false);
        }
      }

      if (brandsSection) {
        const sectionRect = brandsSection.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        console.log("sectionRect.top: ", sectionRect.top);
        console.log("windowHeight: ", windowHeight);
        if (sectionRect.top <= windowHeight - 500) {
          setBrandsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoaderVisible(false);
    }, 1000);
  }, []);

  return (
    <div
      className={`App ${whatWeDoVisible || companyVisible ? "App-white" : ""}`}
      id="app"
    >
      <Decolines show={whatWeDoVisible || companyVisible} />
      <Loader isVisible={loaderVisible} />
      <Menu
        menuActive={menuActive}
        onNavigate={scrollToSection}
        onClose={() => setMenuActive(!menuActive)}
      />
      <Header
        isBgWhite={whatWeDoVisible || companyVisible}
        onClickToggle={() => setMenuActive(!menuActive)}
      />
      {/* <div style={{ display: "flex" }} className="intro-horizontal">
        <Intro />
        <Foundation sectionId={"id-foundation"} isVisible={foundationVisible} />
      </div> */}
      <Intro />
      <WhatWeDo
        sectionId={"id-what-we-do"}
        isVisible={whatWeDoVisible}
        openPitchDesk={() => setPitchDeckModal(true)}
      />
      <Company
        sectionId={"id-company"}
        isVisible={companyVisible}
        companyRef={aboutUsRef}
      />
      <Brands
        sectionId={"id-brands"}
        isVisible={brandsVisible}
        brandsRef={brandsRef}
      />
      <Footer footerRef={contactRef} />
      <Pitch open={pitchDeckModal} onClose={() => setPitchDeckModal(false)} />
    </div>
  );
};
