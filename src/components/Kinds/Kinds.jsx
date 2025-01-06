import { Image } from "antd";
import { Card } from "antd";
import "./Kinds.css";
import image1 from "../../assets/Group 51740.png";
import image2 from "../../assets/Group 51741.png";
import image3 from "../../assets/Group 51742.png";
import image4 from "../../assets/Group 51743.png";

function Kinds() {
  return (
    <section className="kinds">
      <div className="container">
        <div className="kinds-content">
          <Card
            className="kinds-card"
            hoverable
            cover={<Image alt="image" src={image1} className="kinds-img" />}
          >
            <h4 className="kinds-title">Crepes</h4>
          </Card>
          <Card
            hoverable
            className="kinds-card"
            cover={<Image alt="image" src={image2} className="kinds-img" />}
          >
            <h4 className="kinds-title">Waffles</h4>
          </Card>
          <Card
            hoverable
            className="kinds-card"
            cover={<Image alt="image" src={image3} className="kinds-img" />}
          >
            <h4 className="kinds-title">Sea Food</h4>
          </Card>
          <Card
            hoverable
            className="kinds-card"
            cover={<Image alt="image" src={image4} className="kinds-img" />}
          >
            <h4 className="kinds-title">Juices</h4>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Kinds;
