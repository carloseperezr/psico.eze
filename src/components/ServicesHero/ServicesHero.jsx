import React from "react";
import ServicesCSS from "./ServicesHero.module.css";

export const ServicesHero = () => {
  return (
    <div className={`${ServicesCSS.servicesContainer}`}>
      <div className={`${ServicesCSS.servicesWrapper}`}>
        <div className={`${ServicesCSS.servicesText}`}>
          <h2>¿Cómo puedo empezar?</h2>
          <p>Sigue estos 4 pasos</p>
        </div>
        <div className={`${ServicesCSS.stepsContainer}`}>
          <div className={`${ServicesCSS.steps}`}>
            <h3>1</h3>
            <p>
              Comunícate conmigo para iniciar el proceso de Psicoterapia en
              línea.
            </p>
          </div>
          <div className={`${ServicesCSS.steps}`}>
            <h3>2</h3>
            <p>Cuentamé el tipo de terapia que buscas o deseas.</p>
          </div>
          <div className={`${ServicesCSS.steps}`}>
            <h3>3</h3>
            <p>
              Agenda una sesión de terapia en un horario que se adapte a tu
              disponibilidad.
            </p>
          </div>
          <div className={`${ServicesCSS.steps}`}>
            <h3>4</h3>
            <p>Completa el pago para confirmar tu cita y asegurar tu lugar.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
