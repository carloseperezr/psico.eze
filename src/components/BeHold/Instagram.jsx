import React from "react";
import BeholdWidget from "./BeholdWidget ";
import InstagramCSS from "./Instagram.module.css";

export const Instagram = () => {
  return (
    <div className={`${InstagramCSS.container}`}>
      <div className={`${InstagramCSS.wrapper}`}>
        <h2>Visítame en Instagram</h2>
        <div className={`${InstagramCSS.widget}`}>
          <BeholdWidget />
        </div>
      </div>
    </div>
  );
};
