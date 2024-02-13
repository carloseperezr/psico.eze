import React, { useState, useEffect } from "react";
import ServicesCSS from "./Services.module.css";

export const AccordionServices = ({ id, question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");

  useEffect(() => {
    const colors = ["#aeadcc", "#623d50", "#a26a71"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setBackgroundColor(randomColor);
  }, []);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`${ServicesCSS.accordion}`}
      onClick={toggleAccordion}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={`${ServicesCSS.item}`}>
        <p className={`${ServicesCSS.number}`}>{id}</p>
        <p className={`${ServicesCSS.text}`}>{question}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className={`${ServicesCSS.icon} ${isOpen ? ServicesCSS.rotate : ""}`}
        >
          <path d="m8.25 4.5 7.5 7.5-7.5 7.5" />
        </svg>
      </div>
      <div
        className={`${ServicesCSS.hiddenBox} ${
          isOpen ? ServicesCSS.activeBox : ""
        }`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};
