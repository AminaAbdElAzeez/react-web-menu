import React from "react";
import Slider from "react-slick";
import { Card } from "antd";
import "./Branches.css";
import image1 from "../../assets/location-ic.png";
import image2 from "../../assets/Call.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";

function Branches({ selectedBranch }) {
  const { t } = useTranslation();

  const branches = [
    {
      desc: t("branch1Desc"),
      address: t("branch1Address"),
      phone: "16226",
      lat: 30.02175,
      long: 31.4443611,
      branch: "cairo",
    },
    {
      desc: t("branch2Desc"),
      address: t("branch2Address"),
      phone: "16226",
      lat: 30.588146,
      long: 31.4877952,
      branch: "zagazig",
    },
    {
      desc: t("branch3Desc"),
      address: t("branch3Address"),
      phone: "16226",
      lat: 30.9779279,
      long: 31.1713644,
      branch: "almahala",
    },
    {
      desc: t("branch4Desc"),
      address: t("branch4Address"),
      phone: "16226",
      lat: 30.788313,
      long: 31.000022,
      branch: "tanta",
    },
    {
      desc: t("branch5Desc"),
      address: t("branch5Address"),
      phone: "16226",
      lat: 30.799004,
      long: 31.00132,
      branch: "tanta",
    },
    {
      desc: t("branch6Desc"),
      address: t("branch6Address"),
      phone: "16226",
      lat: 30.7959398,
      long: 30.9919414,
      branch: "tanta",
    },
  ];

  const filteredBranches = branches.filter(
    (branch) => branch.branch === selectedBranch
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
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
        <div className="branches-slider">
          {filteredBranches.length > 1 ? (
            <Slider {...settings}>
              {filteredBranches.map((branch, index) => (
                <Card className="branch-card" key={index}>
                  <div className="branch-content">
                    <img src={image1} alt="location icon" />
                    <p className="branch-desc">{branch.desc}</p>
                    <a
                      className="branch-address"
                      href={`https://www.google.com/maps?q=${branch.lat},${branch.long}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "#1890ff", cursor: "pointer" }}
                    >
                      {branch.address}
                    </a>
                    <p className="branch-phone">
                      <img src={image2} alt="phone icon" />
                      {branch.phone}
                    </p>
                  </div>
                </Card>
              ))}
            </Slider>
          ) : (
            filteredBranches.map((branch, index) => (
              <Card className="branch-card single-branch" key={index}>
                <div className="branch-content">
                  <img src={image1} alt="location icon" />
                  <p className="branch-desc">{branch.desc}</p>
                  <a
                    className="branch-address"
                    href={`https://www.google.com/maps?q=${branch.lat},${branch.long}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#1890ff", cursor: "pointer" }}
                  >
                    {branch.address}
                  </a>
                  <p className="branch-phone">
                    <img src={image2} alt="phone icon" />
                    {branch.phone}
                  </p>
                </div>
              </Card>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Branches;
