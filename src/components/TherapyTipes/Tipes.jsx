import React from "react";
import TherapyCSS from "./Therapy.module.css";

export const Tipes = ({ title, Timg }) => {
  return (
    <div className={`${TherapyCSS.TypesContainer}`}>
      <div className={`${TherapyCSS.TypesIMG}`}>
        <img src={Timg} alt={title} />
      </div>
      <div className={`${TherapyCSS.TypesTitle}`}>
        <h3>{title}</h3>
      </div>
    </div>
  );
};
