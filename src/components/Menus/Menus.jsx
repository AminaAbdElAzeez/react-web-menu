import React from "react";
import image1 from "../../assets/Rectangle 28.png";
import image2 from "../../assets/Rectangle 31.png";
import image3 from "../../assets/Rectangle 32.png";
import image4 from "../../assets/Rectangle 33.png";
import styles from "./Menus.module.css";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Menus() {
  const { t } = useTranslation();

  return (
    <section className={styles.menus}>
      <div className={styles.container}>
        <h5 className={styles.menusSubTitle}>{t("menusSubTitle")}</h5>
        <h3 className={styles.menusTitle}>{t("menusTitle")}</h3>
        <div className={styles.menusContent}>
          <Link to="cairo">
            <div className={styles.menusCard}>
              <img alt="image" src={image1} className={styles.menusImg} />
              <h4 className={styles.menusItemTitle}>{t("menuCairo")}</h4>
              <div className={styles.line}></div>
            </div>
          </Link>
          <Link to="zagazig">
            <div className={styles.menusCard}>
              <img alt="image" src={image2} className={styles.menusImg} />
              <h4 className={styles.menusItemTitle}>{t("menuZagazig")}</h4>
              <div className={styles.line}></div>
            </div>
          </Link>
          <Link to="tanta">
            <div className={styles.menusCard}>
              <img alt="image" src={image3} className={styles.menusImg} />
              <h4 className={styles.menusItemTitle}>{t("menuTanta")}</h4>
              <div className={styles.line}></div>
            </div>
          </Link>
          <Link to="almahala">
            <div className={styles.menusCard}>
              <img alt="image" src={image4} className={styles.menusImg} />

              <h4 className={styles.menusItemTitle}>{t("menuAlmahala")}</h4>
              <div className={styles.line}></div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Menus;
