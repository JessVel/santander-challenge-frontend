import React from "react";
import Lottie from "react-lottie";
import ufo from "./empty-icon.json";
import "./styles/ufo.css";

const UfoAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: ufo,
  };

  return (
    <div className="">
      <Lottie options={defaultOptions} />
    </div>
  );
};

export default UfoAnimation;
