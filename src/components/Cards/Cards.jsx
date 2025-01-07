import React, { useState } from "react";
import { Button, Card, Modal } from "antd";
import { DoubleRightOutlined, DoubleLeftOutlined } from "@ant-design/icons";
import image1 from "../../assets/Frame1.png";
import image2 from "../../assets/location-ic.png";
import "./Cards.css";
import Branches from "../Branches/Branches";
import MenusName from "../MenusName/MenusName";
import { useTranslation } from "react-i18next";

function Cards() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { t, i18n } = useTranslation();

  const showBranchesModal = () => {
    setModalContent(<Branches />);
    setIsModalOpen(true);
  };

  const showMenusModal = () => {
    setModalContent(<MenusName />);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <section className="cards">
      <div className="container">
        <div className="cards-content">
          <Card hoverable className="card-item">
            <img alt="Branches" src={image1} className="card-img" />
            <h3 className="card-title">{t("cardTitle1")}</h3>
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
            <h3 className="card-title">{t("cardTitle2")}</h3>
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
        </div>
      </div>

      <Modal
        title="Details"
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
