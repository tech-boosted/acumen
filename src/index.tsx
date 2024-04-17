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
      </ParallaxProvider>
    </ReactLenis>
  </React.StrictMode>
);
