import React from "react";
const ServiceCard = ({ imgSrc, title }) => {
  return (
    <div className="serviceCard">
      <img width={100} src={imgSrc} alt="loading.." />
      <p
        className="m-0 text-center text-white"
        style={{ fontSize: "0.7rem", lineHeight: "1", fontWeight: "600" }}
      >
        {title}
      </p>
    </div>
  );
};

export default ServiceCard;
