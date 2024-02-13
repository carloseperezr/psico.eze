import React from "react";
import TherapyCSS from "./Therapy.module.css";

export const TherapyTipes = () => {
  return (
    <div className={`${TherapyCSS.therapyTipesContainer}`}>
      <div className={`${TherapyCSS.therapyTipesWrapper}`}>
        <div className={`${TherapyCSS.therapyTypes1}`}>
          <div className={`${TherapyCSS.terapyAdulto}`}>
            <h2 className={`${TherapyCSS.adulto}`}>
              Terapia individual Adulto
            </h2>
          </div>
          <div className={`${TherapyCSS.terapyPareja}`}>
            <h2 className={`${TherapyCSS.pareja}`}>Terapia de Pareja</h2>
          </div>
        </div>
        <div className={`${TherapyCSS.therapyTypes2}`}>
          <div className={`${TherapyCSS.terapyAdolescente}`}>
            <h2 className={`${TherapyCSS.adolescente}`}>
              Terapia individual Adolescentes
            </h2>
          </div>
          <div className={`${TherapyCSS.terapyIG}`}>
            <h2 className={`${TherapyCSS.ig}`}>@PSICO.EZE</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
