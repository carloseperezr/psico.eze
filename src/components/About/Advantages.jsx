import React from "react";
import AboutCSS from "./About.module.css";

export const Advantages = ({ title, img, texto }) => {
  return (
    <div className={`${AboutCSS.cards}`}>
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{texto}</p>
    </div>
  );
};
