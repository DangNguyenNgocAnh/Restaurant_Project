import React from "react";

const ItemMenu = (props) => {
  return (
    <div >
      <div className="menu-img">
        <img src={props.propsItem.src} alt="" />
      </div>
      <div className="menu-content">
        <a href="">{props.propsItem.name}</a>
        <span>{props.propsItem.price}</span>
      </div>
      <div className="menu-ingredients">{props.propsItem.ingredients}</div>
    </div>
  );
};
const MenuItem = (props) => {
  const propsList = props.itemMenu;
  return (
    <div className="menu-item">
      {propsList.map((item) => (
        <ItemMenu propsItem={item} />
      ))}
    </div>
  );
};
export default MenuItem;
