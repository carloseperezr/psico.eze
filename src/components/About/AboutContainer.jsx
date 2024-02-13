import AboutCSS from "./About.module.css";
import { Advantages } from "./Advantages";

export const AboutContainer = () => {
  return (
    <div className={`${AboutCSS.aboutContainer}`}>
      <div className={`${AboutCSS.aboutWrapper}`}>
        <div className={`${AboutCSS.aboutText}`}>
          <h2>Psicoterapia Online</h2>
          <div className={`${AboutCSS.cardsContainer}`}>
            <Advantages
              img={"https://i.postimg.cc/sDn3w1Fj/location-icon.png"}
              title={"Acceder desde cualquier lugar"}
              texto={
                "Terapia disponible en cualquier ubicación con conexión a internet."
              }
            />
            <Advantages
              img={"https://i.postimg.cc/J75rHPPB/clock-icon.png"}
              title={"Flexibilidad Horaria"}
              texto={"Sesiones terapéuticas adaptadas a horarios convenientes."}
            />
            <Advantages
              img={"https://i.postimg.cc/wTx6XLG4/home-icon.png"}
              title={"Comodidad y privacidad"}
              texto={"Ambiente cómodo y confidencial para el paciente."}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
