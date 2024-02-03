import React from "react";
import ServicesCSS from "./ServicesHero.module.css";
import { ServicesCard } from "../ServicesCards/ServicesCard";
import duelo from "../../assets/img/duelo.svg";
import ansiedad from "../../assets/img/anxiety.svg";
import depresion from "../../assets/img/depresion.svg";
import addiccion from "../../assets/img/adicciones.svg";
import emociones from "../../assets/img/emociones.svg";
import autoestima from "../../assets/img/autoestima.svg";

export const ServicesHero = () => {
  return (
    <div className={`${ServicesCSS.servicesContainer}`}>
      <div className={`${ServicesCSS.servicesWrapper}`}>
        <div className={`${ServicesCSS.servicesText}`}>
          <h2>Te acompaño en el abordaje de</h2>
          <div className={`${ServicesCSS.cardContainer}`}>
            <ServicesCard title={"Ansiedad"} SCimg={ansiedad} />
            <ServicesCard title={"Depresión"} SCimg={depresion} />
            <ServicesCard title={"Duelo"} SCimg={duelo} />
            <ServicesCard title={"Autoestima"} SCimg={autoestima} />
            <ServicesCard title={"Manejo de Emociones"} SCimg={emociones} />
            <ServicesCard title={"Adicciones"} SCimg={addiccion} />
          </div>
        </div>
      </div>
    </div>
  );
};
