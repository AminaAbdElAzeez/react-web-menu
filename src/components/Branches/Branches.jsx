import React from "react";
import Slider from "react-slick";
import { Card } from "antd";
import "./Branches.css";
import image1 from "../../assets/location-ic.png";
import image2 from "../../assets/Call.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

function Branches() {
  const { t } = useTranslation();

  const branches = [
    {
      desc: t("branch1Desc"),
      address: t("branch1Address"),
      phone: "16226",
    },
    {
      desc: t("branch2Desc"),
      address: t("branch2Address"),
      phone: "16226",
    },
    {
      desc: t("branch3Desc"),
      address: t("branch3Address"),
      phone: "16226",
    },
    {
      desc: t("branch4Desc"),
      address: t("branch4Address"),
      phone: "16226",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="branches">
      <div className="container">
        <h2 className="branches-title">{t("branchTitle")}</h2>
        <p className="branches-desc">{t("branchDesc")}</p>
        <div className="branches-slider">
          <Slider {...settings}>
            {branches.map((branch, index) => (
              <Card className="branch-card" key={index}>
                <div className="branch-content">
                  <img src={image1} alt="location icon" />
                  <p className="branch-desc">{branch.desc}</p>
                  <h4 className="branch-address">{branch.address}</h4>
                  <p className="branch-phone">
                    <img src={image2} alt="phone icon" />
                    {branch.phone}
                  </p>
                </div>
              </Card>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Branches;
