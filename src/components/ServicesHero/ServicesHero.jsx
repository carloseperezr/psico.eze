import React from "react";
import ServicesCSS from "./ServicesHero.module.css";

export const ServicesHero = () => {
  return (
    <div className={`${ServicesCSS.servicesContainer}`}>
      <div className={`${ServicesCSS.servicesWrapper}`}>
        <div className={`${ServicesCSS.servicesText}`}>
          <h2>Como puedo empezar</h2>
          <p>Podemos empezar siguiendo estos 4 pasos</p>
        </div>
        <div className={`${ServicesCSS.stepsContainer}`}>
          <div className={`${ServicesCSS.steps}`}>
            <h3>1</h3>
            <p>
              Comunícate conmigo para iniciar el proceso de psicoterapia en
              línea.
            </p>
          </div>
          <div className={`${ServicesCSS.steps}`}>
            <h3>2</h3>
            <p>
              Selecciona el tipo de terapia que necesitas para abordar tus
              preocupaciones y metas
            </p>
          </div>
          <div className={`${ServicesCSS.steps}`}>
            <h3>3</h3>
            <p>
              Programa una sesión de terapia en línea en un horario que se
              adapte a tu disponibilidad.
            </p>
          </div>
          <div className={`${ServicesCSS.steps}`}>
            <h3>4</h3>
            <p>
              Completa el pago para confirmar tu cita y asegurar tu lugar en la
              sesión de terapia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
