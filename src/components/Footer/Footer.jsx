import image1 from "../../assets/fb-ic.svg";
import image2 from "../../assets/insta-ic.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <ul className="footer-left">
            <li>about Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
          <ul className="footer-right">
            <li>
              <img src={image1} alt="image" />
            </li>
            <li>
              <img src={image2} alt="image" />
            </li>
          </ul>
        </div>
        <hr />
        <p className="copyright">Copyright ©2024 Apps Square</p>
      </div>
    </footer>
  );
}

export default Footer;
