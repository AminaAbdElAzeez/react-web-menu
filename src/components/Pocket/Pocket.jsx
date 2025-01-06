import image1 from "../../assets/App Store Black.png";
import image2 from "../../assets/Google Play Black.png";
import image3 from "../../assets/Group 51777.png";
import "./Pocket.css";

function Pocket() {
  return (
    <section className="pocket">
      <div className="container">
        <div className="pocket-content">
          <div className="pocket-item-left">
            <h3 className="pocket-item-title">Put us in your pocket</h3>
            <p>
              Download our app from google play or app store and you don’t have
              to be worry about your food anymore.
            </p>
            <div className="pocket-icon">
              <img src={image1} alt="image" />
              <img src={image2} alt="image" />
            </div>
          </div>
          <div className="pocket-item-right">
            <img src={image3} alt="image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pocket;
