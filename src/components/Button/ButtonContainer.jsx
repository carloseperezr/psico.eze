import ButtonCSS from "./Button.module.css";

export const ButtonContainer = ({ text, light, dark }) => {
  return (
    <button
      className={light ? `${ButtonCSS.btnLight}` : `${ButtonCSS.btnDark}`}
    >
      {text}
    </button>
  );
};
