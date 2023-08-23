import React from "react";
import { NavLink } from "react-router-dom";
const OneDesCard = ({ title, features, icon, redirectLink, bg_card }) => {
  return (
    <div
      className="od_card p-3 p-md-3 pt-md-3"
      style={{ background: `url(${icon}) ${bg_card}`, minWidth: "fit-contant" }}
    >
      <h3 className="od_card_title">{title}</h3>
      <ul className="m-0 p-0">
        {features.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <NavLink className="od_card__btn rounded-5" to={redirectLink}>
        Create Now
      </NavLink>
    </div>
  );
};

export default OneDesCard;
