import image1 from "../../assets/Frame.png";
import image2 from "../../assets/Frame1.png";
import image3 from "../../assets/Frame2.png";
import "./Services.css";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <div className="services-content">
          <div className="services-item">
            <img src={image1} />
            <h3 className="service-title">
              Wide selection of <br /> restaurants
            </h3>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur. Ornare massa nunc
              <br />
              nibh tristique.
            </p>
          </div>
          <div className="services-item">
            <img src={image2} />
            <h3 className="service-title">
              Easy ordering <br /> process
            </h3>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur. Ornare massa nunc.
            </p>
          </div>
          <div className="services-item">
            <img src={image3} />
            <h3 className="service-title">
              Fast delivery <br /> within 20 min
            </h3>
            <p>
              Lorem ipsum dolor sit amet <br /> consectetur. Ornare massa <br />
              nunc nibh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
