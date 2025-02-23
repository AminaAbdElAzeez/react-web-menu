import "./MenuItem.css";
import { Collapse } from 'antd';


export default function MenuItem({ price, name, new: isNew, details }) {
  const text = `
  بانيه عادي/بانيه حار/مشوي صدور/ شيش/رومي مدخن
`;

  const label = <div className="collapse-content">
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
</div>;
  return (
    <li>
    <Collapse
     
      items={[
        {
          key: '1',
          label: <div>{label}</div>,
          children: <p className="collapse-text">{text}</p>,
        },
      ]}
      className="collapse"
    />
    </li>
  );
}
