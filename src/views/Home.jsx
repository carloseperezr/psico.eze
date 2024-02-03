import { AboutContainer } from "../components/About/AboutContainer";
import { Instagram } from "../components/BeHold/Instagram";
import { HeroContainer } from "../components/Hero/HeroContainer";
import { ServicesHero } from "../components/ServicesHero/ServicesHero";
import { TherapyTipes } from "../components/TherapyTipes/TherapyTipes";

export const Home = () => {
  return (
    <div>
      <HeroContainer />
      <AboutContainer />
      <TherapyTipes />
      <ServicesHero />
      <Instagram />
    </div>
  );
};
