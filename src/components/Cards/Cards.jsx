import React, { useState } from "react";
import { Button, Card, Modal } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import image1 from "../../assets/Frame1.png";
import image2 from "../../assets/Frame.png";
import image3 from "../../assets/app.png";

import "./Cards.css";
import MenusName from "../MenusName/MenusName";
import { useTranslation } from "react-i18next";
import BranchesName from "../BranchesName/BranchesName";
import Branches from "../Branches/Branches";
import Cairo from "../../Routes/Cairo/Cairo";
import Zagazig from "../../Routes/Zagazig/Zagazig";
import Tanta from "../../Routes/Tanta/Tanta";
import Almahala from "../../Routes/Almahala/Almahala";

function Cards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const { t, i18n } = useTranslation();

  const showBranchesModal = () => {
    setModalContent(<BranchesName onBranchSelect={handleBranchSelect} />);
    setIsModalOpen(true);
  };

  const showMenusModal = () => {
    setModalContent(<MenusName onMenuSelect={handleMenuSelect} />);
    setIsModalOpen(true);
  };

  const handleMenuSelect = (menu) => {
    switch (menu) {
      case "Cairo":
        setModalContent(<Cairo />);
        break;
      case "Zagazig":
        setModalContent(<Zagazig />);
        break;
      case "Tanta":
        setModalContent(<Tanta />);
        break;
      case "Almahala":
        setModalContent(<Almahala />);
        break;
      default:
        setModalContent(null);
    }
  };

  const handleBranchSelect = (branch) => {
    setSelectedBranch(branch);
    setModalContent(<Branches selectedBranch={branch} />);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setSelectedBranch(null);
  };

  return (
    <section className="cards">
      <div className="container">
        <div className="cards-content">
          <Card hoverable className="card-item">
            <img alt="Branches" src={image1} className="card-img" />
            <h4 className="card-title">{t("cardTitle1")}</h4>
            <Button
              type="primary"
              className="cards-item-btn"
              onClick={showBranchesModal}
            >
              {t("learn")}
              {i18n.dir() === "rtl" ? (
                <DoubleLeftOutlined className="card-icon" />
              ) : (
                <DoubleRightOutlined className="card-icon" />
              )}
            </Button>
          </Card>
          <Card hoverable className="card-item">
            <img alt="Menus" src={image2} className="card-img" />
            <h4 className="card-title">{t("cardTitle2")}</h4>
            <Button
              type="primary"
              className="cards-item-btn"
              onClick={showMenusModal}
            >
              {t("learn")}
              {i18n.dir() === "rtl" ? (
                <DoubleLeftOutlined className="card-icon" />
              ) : (
                <DoubleRightOutlined className="card-icon" />
              )}
            </Button>
          </Card>
          <Card hoverable className="card-item">
            <img alt="Download App" src={image3} className="dawnload-img" />
            <h4 className="card-title">{t("cardTitle3")}</h4>
            <Button
              type="primary"
              className="cards-item-btn"
              onClick={() =>
                window.open("https://l.linklyhq.com/l/5raE", "_blank")
              }
            >
              {t("getStart")}
              {i18n.dir() === "rtl" ? (
                <DoubleLeftOutlined className="card-icon" />
              ) : (
                <DoubleRightOutlined className="card-icon" />
              )}
            </Button>
          </Card>
        </div>
      </div>

      <Modal
        title={selectedBranch ? t("detailsBranch") : t("details")}
        open={isModalOpen}
        onCancel={handleCloseModal}
        footer={null}
        style={{ overflow: "hidden" }}
      >
        {modalContent}
      </Modal>
    </section>
  );
}

export default Cards;
