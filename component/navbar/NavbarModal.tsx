import React, { useState } from "react";
import DarkMode from "./../dark-mode/Dark-Mode";

import styles from "./../../styles/components/navbar/navbar-modal.module.scss";
function NavbarModal() {
  return (
    <div className={styles.navigation}>
      <input
        type="checkbox"
        className={styles.navigation__checkbox}
        id="navi-toggle"
      />

      <label htmlFor="navi-toggle" className={styles.navigation__button}>
        <span className={styles.navigation__icon}>&nbsp;</span>
      </label>
      <div className={styles.navigation__background}>&nbsp;</div>
      <div className={styles.navigation__nav}>
        <ul className={styles.navigation__list}>
          <li className={styles.navigation__item}>
            <a href="/artikel" className={styles.navigation__link}>
              Tutorial
            </a>
          </li>
          <li className={styles.navigation__item}>
            <a href="/kategori" className={styles.navigation__link}>
              Kategori
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarModal;
