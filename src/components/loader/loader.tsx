import React from "react";
import "./loader.css";

export const Loader: React.FC<{
  isVisible: boolean;
}> = ({ isVisible }) => {
  return (
    <div className={`loader ${isVisible ? "" : "loader-move"}`}>
      <div>
        <p className="loader-text app-text-regular">ACUMEN</p>
      </div>
    </div>
  );
};
