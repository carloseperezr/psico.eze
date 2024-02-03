// NavBar.js
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";
import { LogoContainer } from "../Logo/LogoContainer";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      closeNav();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`${styles.navbar}`}>
      <Link to="/" className={`${styles.logo}`}>
        <LogoContainer text="PsicoEze" />
      </Link>

      {windowWidth <= 768 && (
        <div className={`${styles["menu-icon"]}`} onClick={toggleNav}>
          {isNavOpen ? <FaTimes /> : <FaBars />}
        </div>
      )}

      {(windowWidth > 768 || isNavOpen) && (
        <div className={`${styles["nav-links"]}`}>
          {windowWidth > 768 && (
            <>
              <Link to="/" onClick={closeNav} className={`${styles.link}`}>
                Inicio
              </Link>
              <Link
                to="/services"
                onClick={closeNav}
                className={`${styles.link}`}
              >
                Servicios
              </Link>
              <Link
                to="/contact"
                onClick={closeNav}
                className={`${styles.link}`}
              >
                Contacto
              </Link>
            </>
          )}
          {windowWidth > 768 && (
            <button className={`${styles["schedule-button"]}`}>Agendar</button>
          )}
        </div>
      )}

      {isNavOpen && (
        <div className={`${styles["dropdown-menu"]}`} onClick={closeNav}>
          <Link to="/" className={`${styles.link}`}>
            Inicio
          </Link>
          <Link to="/services" className={`${styles.link}`}>
            Servicios
          </Link>
          <Link to="/contact" className={`${styles.link}`}>
            Contacto
          </Link>
          {windowWidth <= 768 && (
            <button className={`${styles["schedule-button"]}`}>Agendar</button>
          )}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
