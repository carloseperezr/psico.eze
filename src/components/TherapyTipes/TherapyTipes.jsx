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
          <a
            href="https://www.instagram.com/psico.eze/"
            target="_blank"
            className={`${TherapyCSS.terapyIG}`}
          >
            <h2 className={`${TherapyCSS.ig}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-brand-instagram"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
              PSICO.EZE
            </h2>
          </a>
        </div>
      </div>
    </div>
  );
};
