import MenuItem from "../MenuItem/MenuItem";
import "./MenuSection.css";

export default function MenuSection({
  category,
  arabicCategory,
  items,
  image,
  categoryBg,
}) {
  return (
    <div className="pages-menu-item">
      <div
        className="pages-menu-item-title"
        style={{ backgroundColor: categoryBg }}
      >
        <h3 className="pages-menu-item-h3">
          <span>{category}</span>
          <span>{arabicCategory}</span>
        </h3>
        <div className="line"></div>
      </div>
      <ul className="menu-item-list">
        {items.map((item, index) => (
          <MenuItem key={index} {...item} />
        ))}
      </ul>
      {image && (
        <div className="menu-item-img">
          <img src={image} alt={`${category}`} />
        </div>
      )}
    </div>
  );
}
