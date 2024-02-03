import HeroCSS from "./Hero.module.css";
import { ProfilePic } from "../ProfilePic/ProfilePic.jsx";

export const HeroContainer = () => {
  return (
    <div className={`${HeroCSS.heroContainer}`}>
      <div className={`${HeroCSS.heroInfoWrapper}`}>
        <div className={`${HeroCSS.heroImg}`}>
          <ProfilePic />
        </div>
        <div className={`${HeroCSS.heroTextInfo}`}>
          <h1>Psicólogo Ezequiel Aparicio</h1>
          <h2>Psicoterapeuta Gestalt</h2>
          <small>FVP: 000000</small>
          <div>
            <div className={`${HeroCSS.heroBtn}`}>
              <button>Sobre Mi</button>
              <button>Agenda</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
