import { Link } from "react-router-dom";
import "./MenusName.css";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

function MenusName() {
  const color = "#333333";
  const { t } = useTranslation();

  return (
    <section className="menus-name">
      <div className="container">
        <div className="menus-name-content">
          <Tooltip title={t("cairoMenu")} color={color}>
            <Link to="/cairo">{t("cairoLink")}</Link>
          </Tooltip>
          <Tooltip title={t("zagazigMenu")} color={color}>
            <Link to="/zagazig">{t("zagazigLink")}</Link>
          </Tooltip>
          <Tooltip title={t("tantaMenu")} color={color}>
            <Link to="/tanta">{t("tantaLink")}</Link>
          </Tooltip>
          <Tooltip title={t("almahalaMenu")} color={color}>
            <Link to="/almahala">{t("almahalaLink")}</Link>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}

export default MenusName;
