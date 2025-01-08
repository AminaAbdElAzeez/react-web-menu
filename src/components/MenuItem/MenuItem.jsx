import "./MenuItem.css";

export default function MenuItem({ price, name, new: isNew, details }) {
  return (
    <li>
      <span>{price}</span>
      <div>
        {isNew && name !== "زنجر سوبربريم" && (
          <p className="menu-item-new">new</p>
        )}
        {details && (
          <div className="hot-cold">
            {details.cold && <span className="cold">بارد / </span>}
            {details.hot && <span className="hot">حار</span>}
          </div>
        )}
      </div>
      <span>{name}</span>
    </li>
  );
}
