import React from "react";
import TherapyCSS from "./Therapy.module.css";
import { Tipes } from "./Tipes";
import individual from "../../assets/img/individual.svg";
import pareja from "../../assets/img/pareja.svg";

export const TherapyTipes = () => {
  return (
    <div className={`${TherapyCSS.therapyTipesContainer}`}>
      <div className={`${TherapyCSS.therapyTipesWrapper}`}>
        <div className={`${TherapyCSS.therapyTipesText}`}>
          {/* <h2>Espacio para</h2> */}
          <div className={`${TherapyCSS.therapyTipes}`}>
            <Tipes
              title={"Psicoterapia Individual Adolescentes y Adultos"}
              Timg={individual}
            />
            <Tipes title={"Parejas"} Timg={pareja} />
          </div>
        </div>
      </div>
    </div>
  );
};
