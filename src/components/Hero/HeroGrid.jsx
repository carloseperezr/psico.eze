import React, { useEffect } from "react";
import HeroCSS from "./Hero.module.css";

export const HeroGrid = () => {
  useEffect(() => {
    const items = document.querySelectorAll(`.${HeroCSS.fadeIn}`);

    items.forEach((item) => {
      const randomDelay = Math.random() * 1500;
      setTimeout(() => {
        item.classList.add(HeroCSS.active);
      }, randomDelay);
    });
  }, []);

  return (
    <div className={`${HeroCSS.angryGrid}`}>
      <div className={`${HeroCSS.item0} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item1} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item2} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item3} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item4} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item5} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item6} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item7} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item8} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item9} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item10} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item11} ${HeroCSS.fadeIn}`}></div>
      <div className={`${HeroCSS.item12} ${HeroCSS.fadeIn}`}></div>
    </div>
  );
};
