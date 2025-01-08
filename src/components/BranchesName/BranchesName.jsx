import { Link } from "react-router-dom";
import "./BranchesName.css";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

function BranchesName({ onBranchSelect }) {
  const color = "#333333";
  const { t } = useTranslation();

  const handleBranchClick = (branch) => {
    onBranchSelect(branch);
  };

  return (
    <section className="branches-name">
      <div className="container">
        <div className="branches-name-content">
          <Tooltip title={t("cairoBranch")} color={color}>
            <Link to="#" onClick={() => handleBranchClick("cairo")}>
              {t("cairoLink")}
            </Link>
          </Tooltip>
          <Tooltip title={t("zagazigBranch")} color={color}>
            <Link to="#" onClick={() => handleBranchClick("zagazig")}>
              {t("zagazigLink")}
            </Link>
          </Tooltip>
          <Tooltip title={t("tantaBranch")} color={color}>
            <Link to="#" onClick={() => handleBranchClick("tanta")}>
              {t("tantaLink")}
            </Link>
          </Tooltip>
          <Tooltip title={t("almahalaBranch")} color={color}>
            <Link to="#" onClick={() => handleBranchClick("almahala")}>
              {t("almahalaLink")}
            </Link>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}

export default BranchesName;
