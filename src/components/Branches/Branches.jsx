import React from "react";
import { Carousel, Card } from "antd";
import "./Branches.css";
import image1 from "../../assets/location-ic.png";
import image2 from "../../assets/Call.png";

const branches = [
  {
    title: "3rd Branch",
    address: "Elnady Street, Elnady Square",
    phone: "16226",
  },
  {
    title: "2nd Branch",
    address: "Saied Street In Front Of Faculty Of Commerce",
    phone: "16226",
  },
  {
    title: "1st Branch",
    address: "El-Giesh St.",
    phone: "16226",
  },
];

function Branches() {
  return (
    <section className="branches" aria-labelledby="branches">
      <div className="container">
        <h2 className="branches-title">The Nearst branche</h2>
        <p className="branches-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </p>
        <div className="branches-slider">
          <Carousel
            dots={true}
            autoplay={true}
            slidesToShow={4}
            slidesToScroll={1}
            centerMode={true} // تفعيل الوضع المركزي لعرض المسافات بين العناصر
            responsive={[
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 2,
                },
              },
            ]}
            aria-live="polite" // لتوضيح أن هذا الكاروسيل ديناميكي
          >
            {branches.map((branch, index) => (
              <Card
                key={index}
                style={{ margin: "0 15px" }} // إضافة مسافة أفقية بين الكروت
                className="branch-card"
              >
                <div className="branch-content">
                  <img src={image1} alt="image" />
                  <p className="branch-title">{branch.title}</p>
                  <h4 className="branch-address">{branch.address}</h4>
                  <p className="branch-phone">
                    <img src={image2} alt="image" />
                    {branch.phone}
                  </p>
                </div>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}

export default Branches;
