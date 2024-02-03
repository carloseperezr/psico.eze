import LinksCSS from "./NavBar.module.css";

export const NavBarLinks = ({ text }) => {
  return <div className={`${LinksCSS.navBarLink}`}>{text}</div>;
};
