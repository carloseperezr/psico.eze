import AboutCSS from "./About.module.css";

export const AboutContainer = () => {
  return (
    <div className={`${AboutCSS.aboutContainer}`}>
      <div className={`${AboutCSS.aboutWrapper}`}>
        <div className={`${AboutCSS.aboutText}`}>
          <h2>Un poco mas sobre mi</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic ea,
            omnis dicta unde quasi dolores quaerat, officiis excepturi
            laudantium facere, eligendi officia voluptas accusantium nesciunt
            eos. Nam ipsa cumque voluptate, et eaque repudiandae, ipsam, ducimus
            sunt aut quibusdam labore ipsum natus nulla veritatis! Dolor, sed
            ut! Inventore, optio voluptatibus qui sapiente provident, sed sint
            reprehenderit, quia quod rem officiis temporibus fugit obcaecati
            aliquam eaque ut laudantium minima recusandae impedit saepe.
          </p>
        </div>
      </div>
    </div>
  );
};
