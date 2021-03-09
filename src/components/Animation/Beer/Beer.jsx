import React from "react";
import Lottie from "react-lottie";
import Beer from "./beer-icon.json";
import "./styles/styles.css";

const BeerAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Beer,
  };

  return (
    <div className="beer-container">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default BeerAnimation;
