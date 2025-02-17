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
  const [previousContent, setPreviousContent] = useState(null);
  const { t, i18n } = useTranslation();
  const [isLargeModal, setIsLargeModal] = useState(false);

  const showBranchesModal = () => {
    setPreviousContent(null);
    setModalContent(<BranchesName onBranchSelect={handleBranchSelect} />);
    setIsModalOpen(true);
  };

  const showMenusModal = () => {
    setPreviousContent(null);
    setModalContent(<MenusName onMenuSelect={handleMenuSelect} />);
    setIsModalOpen(true);
    setIsLargeModal(false);
  };

  const handleMenuSelect = (menu) => {
    setPreviousContent(<MenusName onMenuSelect={handleMenuSelect} />);
    setIsLargeModal(true);
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
        setIsLargeModal(false);
    }
  };

  const handleBranchSelect = (branch) => {
    setPreviousContent(<BranchesName onBranchSelect={handleBranchSelect} />);
    setModalContent(<Branches selectedBranch={branch} />);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
    setPreviousContent(null);
    setIsLargeModal(false);
  };

  const handleBack = () => {
    if (previousContent) {
      setModalContent(previousContent);
      setPreviousContent(null);
    }
  };

  return (
    <section className="cards">
      <div className="container">
        <div className="cards-content">
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
        open={isModalOpen}
        onCancel={handleCloseModal}
        title={
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
            {previousContent && (
              <Button
                type="link"
                onClick={handleBack}
                className="backBtn"
              >
              {i18n.dir() === "rtl" ? (
            <>
              <DoubleRightOutlined className="back-icon"/>
            </>
          ) : (
            <>
              <DoubleLeftOutlined className="back-icon"/>
            </>
          )}
              </Button>
            )}
          </div>
        }
        footer={null}
        style={{ overflow: "hidden" }}
        className={isLargeModal ? "modalLarge" : ""}
      >
        {modalContent}
      </Modal>
    </section>
  );
}

export default Cards;
