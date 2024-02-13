import React from "react";
import Animation from "./Animation.json";
import Lottie from "lottie-react";

export const MessageAnimation = () => {
  return <Lottie animationData={Animation}></Lottie>;
};
