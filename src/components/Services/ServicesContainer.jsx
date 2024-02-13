import React from "react";
import ServicesCSS from "./Services.module.css";
import { AccordionServices } from "./AccordionServices";
import { faqs } from "./faqs";

export const ServicesContainer = () => {
  const renderFaq = () => {
    return faqs.map((faq) => {
      return (
        <AccordionServices
          key={faq.id}
          question={faq.question}
          answer={faq.answer}
          id={faq.id}
        />
      );
    });
  };

  return (
    <div className={`${ServicesCSS.servicesContainer}`}>
      <h1>Perfil Profesional</h1>
      {renderFaq()}
    </div>
  );
};
