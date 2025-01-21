import image8 from "../../assets/footer.png";
import MenuSection from "../../components/MenuSection/MenuSection";
import { menuItems } from "../../components/Data/Cairo.jsx";
import Header from "../../components/Header/Header.jsx";
import { useTranslation } from "react-i18next";

function Zagazig() {
        const { t } = useTranslation();
  
  return (
    <section className="cairo-page">
      <Header title={t("zagazigMenu")} />
        <div className="pages-menu-content">
          <div className="pages-menu-left">
            {menuItems
              .slice(0, Math.ceil(menuItems.length / 2))
              .map((menu, index) => (
                <MenuSection key={index} {...menu} />
              ))}
          </div>
          <div className="pages-menu-right">
            {menuItems
              .slice(Math.ceil(menuItems.length / 2))
              .map((menu, index) => (
                <MenuSection key={index} {...menu} />
              ))}
          </div>
        </div>
        <div className="cairo-img">
          <img src={image8} alt="footer" />
        </div>
    </section>
  );
}

export default Zagazig;
