import { Fade } from "react-awesome-reveal";
import HeroCSS from "./Hero.module.css";
import { HeroGrid } from "./HeroGrid.jsx";

export const HeroContainer = () => {
  return (
    <div className={`${HeroCSS.heroContainer}`}>
      <div className={`${HeroCSS.heroInfoWrapper}`}>
        <div className={`${HeroCSS.heroTextWrapper}`}>
          <div className={`${HeroCSS.heroTextInfo}`}>
            <h1>Ezequiel Aparicio</h1>
            <h2>Psicólogo / Psicoterapeuta Gestalt</h2>
          </div>
          <div className={`${HeroCSS.heroBtn}`}>
            <a href="http://tinyurl.com/5edzezwj" target="_blank">
              <button>Agenda</button>
            </a>
          </div>
        </div>
        <div className={`${HeroCSS.gridContainer}`}>
          <HeroGrid />
        </div>
      </div>
    </div>
  );
};
