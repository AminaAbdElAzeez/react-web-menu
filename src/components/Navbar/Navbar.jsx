import logo from "../../assets/c&w-logo.4a595d99 1.png";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="links">
          <a href="/#">
            <img src={logo} alt="logo" className="logo" />
          </a>
          <a href="/#" className="contact-btn">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
