import React from "react";
import "./decolines.css";

export const Decolines: React.FC<{ show: boolean }> = ({ show }) => {
  return (
    <div
      className={`decolines decolines--fixed ${show ? "" : "decolines-hide"}`}
    >
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
  );
};
