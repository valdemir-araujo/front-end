import React from "react";
import styles from "./header.module.css";

const Header = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.tel}>
        <a href="#">&#x260E; (83) 99999-9999</a>
        <a href="#">&#x2709; www.valdemirgmail.com.br</a>
      </div>
      <div className={styles.empresa}>
        <a href="#">
          {" "}
          <img src="icons.png" alt="logo" /> Atendemos pelo watsapp
        </a>
        <a href="#" id={styles.fale}>
          Fale com nosco
        </a>
      </div>
    </div>
  );
};

export default Header;
