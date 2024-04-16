import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import { ReactLenis } from "@studio-freight/react-lenis";
import { ParallaxProvider } from "react-scroll-parallax";

const element = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <ReactLenis root options={{ lerp: 0.05 }}>
      <ParallaxProvider>
        <App />
        <div className="decolines decolines--fixed">
          <div
            className="decoline"
            style={{
              width: "1px",
              height: "100vh",
              left: "10%",
              top: "0px",
              background: "rgb(87, 87, 87)",
              opacity: 0.2,
              transformOrigin: "50% 0%",
              transform: "scaleY(1)",
            }}
          ></div>
          <div
            className="decoline"
            style={{
              width: "1px",
              height: "100vh",
              left: "30%",
              top: "0px",
              background: "rgb(87, 87, 87)",
              opacity: 0.2,
              transformOrigin: "50% 0%",
              transform: "scaleY(1)",
            }}
          ></div>
          <div
            className="decoline"
            style={{
              width: "1px",
              height: "100vh",
              left: "50%",
              top: "0px",
              background: "rgb(87, 87, 87)",
              opacity: 0.2,
              transformOrigin: "50% 0%",
              transform: "scaleY(1)",
            }}
          ></div>
          <div
            className="decoline"
            style={{
              width: "1px",
              height: "100vh",
              left: "70%",
              top: "0px",
              background: "rgb(87, 87, 87)",
              opacity: 0.2,
              transformOrigin: "50% 0%",
              transform: "scaleY(1)",
            }}
          ></div>
          <div
            className="decoline"
            style={{
              width: "1px",
              height: "100vh",
              left: "90%",
              top: "0px",
              background: "rgb(87, 87, 87)",
              opacity: 0.2,
              transformOrigin: "50% 0%",
              transform: "scaleY(1)",
            }}
          ></div>
        </div>
      </ParallaxProvider>
    </ReactLenis>
  </React.StrictMode>
);
