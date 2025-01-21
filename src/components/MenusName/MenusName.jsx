import { Link } from "react-router-dom";
import "./MenusName.css";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

function MenusName({ onMenuSelect }) {
  const color = "#333333";
  const { t } = useTranslation();

  return (
    <section className="menus-name">
      <div className="container">
        <div className="menus-name-content">
          <Tooltip title={t("cairoMenu")} color={color}>
            <button onClick={() => onMenuSelect("Cairo")}>{t("cairoLink")}</button>
          </Tooltip>
          <Tooltip title={t("zagazigMenu")} color={color}>
            <button onClick={() => onMenuSelect("Zagazig")}>{t("zagazigLink")}</button>
          </Tooltip>
          <Tooltip title={t("tantaMenu")} color={color}>
            <button onClick={() => onMenuSelect("Tanta")}>{t("tantaLink")}</button>
          </Tooltip>
          <Tooltip title={t("almahalaMenu")} color={color}>
            <button onClick={() => onMenuSelect("Almahala")}>{t("almahalaLink")}</button>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}

export default MenusName;
