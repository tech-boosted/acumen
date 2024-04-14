import React, { useEffect, useState } from "react";
import {
  Brands,
  Company,
  Header,
  Intro,
  Loader,
  Menu,
  WhatWeDo,
} from "./components";
import "./App.css";

export const App = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [whatWeDoVisible, setWhatWeDoVisible] = useState(false);
  const [companyVisible, setCompanyVisible] = useState(false);
  const [brandsVisible, setBrandsVisible] = useState(false);
  const [loaderVisible, setLoaderVisible] = useState(true);

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
          sectionRect.top <= windowHeight / 6 &&
          sectionRect.bottom >= 0 &&
          !(sectionRect.bottom <= windowHeight - 600)
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

        console.log(
          "sectionRect.top, windowHeight: ",
          sectionRect.top,
          windowHeight
        );
        if (sectionRect.top <= windowHeight - 600 && sectionRect.bottom >= 0) {
          setCompanyVisible(true);
        } else {
          setCompanyVisible(false);
        }
      }

      if (brandsSection) {
        const sectionRect = brandsSection.getBoundingClientRect();
        const windowHeight =
          window.innerHeight || document.documentElement.clientHeight;
        if (sectionRect.top <= windowHeight / 2 && sectionRect.bottom >= 0) {
          setBrandsVisible(true);
        } else {
          setBrandsVisible(false);
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
    <div className={`App ${whatWeDoVisible ? "App-white" : ""}`} id="app">
      <Loader isVisible={loaderVisible} />
      <Menu
        menuActive={menuActive}
        onClose={() => setMenuActive(!menuActive)}
      />
      <Header
        isBgWhite={whatWeDoVisible}
        onClickToggle={() => setMenuActive(!menuActive)}
      />
      {/* <div style={{ display: "flex" }} className="intro-horizontal">
        <Intro />
        <Foundation sectionId={"id-foundation"} isVisible={foundationVisible} />
      </div> */}
      <Intro />
      <WhatWeDo sectionId={"id-what-we-do"} isVisible={whatWeDoVisible} />
      <Company sectionId={"id-company"} isVisible={companyVisible} />
      <Brands sectionId={"id-brands"} isVisible={brandsVisible} />
    </div>
  );
};
