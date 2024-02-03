import React from "react";
import SC from "./SCards.module.css";

export const ServicesCard = ({ SCimg, title }) => {
  return (
    <div className={`${SC.cardContainer}`}>
      <img src={SCimg} alt="" />
      <div className={`${SC.cardTitle}`}>
        <p>{title}</p>
      </div>
    </div>
  );
};
