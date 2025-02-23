import { Link } from "react-router-dom";
import "./BranchesName.css";
import { Tooltip } from "antd";
import { useTranslation } from "react-i18next";

function BranchesName({ onBranchSelect }) {
  const color = "#333333";
  const { t } = useTranslation();

  const handleBranchClick = (branch) => {
    console.log(`📌 فرع تم اختياره: ${branch}`);

    onBranchSelect(branch);
  };
  

  return (
    <section className="branches-name">
      <div className="container">
        <div className="branches-name-content">
          <Tooltip title={t("cairoBranch")} color={color}>
            <Link to="#" onClick={() => handleBranchClick("cairo")}>
              {t("cairoBranchName")}
            </Link>
          </Tooltip>
          <Tooltip title={t("zagazigBranch")} color={color}>
            <Link to="#" onClick={() => handleBranchClick("zagazeg")}>
              {t("ZagazegBranchName")}
            </Link>
          </Tooltip>
          <Tooltip title={t("tantaBranch")} color={color}>
            <Link to="#" onClick={() => handleBranchClick("tanta")}>
              {t("TantaBranchName")}
            </Link>
          </Tooltip>
          <Tooltip title={t("almahalaBranch")} color={color}>
            <Link to="#" onClick={() => handleBranchClick("mahallah")}>
              {t("MahallahBranchName")}
            </Link>
          </Tooltip>
        </div>
      </div>
    </section>
  );
}

export default BranchesName;
