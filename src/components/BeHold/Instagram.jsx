import React from "react";
import BeholdWidget from "./BeholdWidget ";
import InstagramCSS from "./Instagram.module.css";

export const Instagram = () => {
  return (
    <div className={`${InstagramCSS.container}`}>
      <div className={`${InstagramCSS.wrapper}`}>
        <div className={`${InstagramCSS.widget}`}>
          <BeholdWidget />
        </div>
      </div>
    </div>
  );
};
