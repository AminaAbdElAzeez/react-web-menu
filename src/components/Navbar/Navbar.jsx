import logo from "../../assets/c&w-logo.4a595d99 1.png";
import "./Navbar.css";
import { useTranslation } from "react-i18next";
import { Dropdown, Button } from "antd";
import { Link } from "react-router-dom";

function Navbar() {
  const { t, i18n } = useTranslation();

  // تغيير اللغة وتخزينها في localStorage
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng);
    document.documentElement.dir = lng === "ar" ? "rtl" : "ltr"; // ضبط اتجاه النص
  };
  const languageMenu = {
    items: [
      { key: "en", label: "En", onClick: () => changeLanguage("en") },
      { key: "ar", label: "Ar", onClick: () => changeLanguage("ar") },
    ],
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="links">
          <Link to="/">
            <img src={logo} alt="logo" className="logo" />
          </Link>
          <div>
            <Dropdown
              menu={languageMenu}
              placement="bottomRight"
              arrow
              className="drop-Lang"
            >
              <Button>{i18n.language === "en" ? "En" : "Ar"}</Button>
            </Dropdown>
            <a href="#contact" className="contact-btn">
              {t("contact")}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
