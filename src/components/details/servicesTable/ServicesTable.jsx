import React from "react";
import "./servicesTable.css";
import bgImg from "../../../assets/blogsPage/services.gif";
import img1 from "../../../assets/blogsPage/destination1.gif";

import ServiceCard from "./ServiceCard";

const ServicesTable = () => {
  return (
    <div className="servicesTable" style={{marginBottom:"1rem"}}>
      <div className="services_bg position-relative">
        <div className="bg_img overflow-hidden ">
          <img src={bgImg} alt="" />
        </div>
        <h3 className="title text-center text-white position-absolute">
          <span className="text-primary">One Destination </span>
          <br />
          Endless Possibilities
        </h3>
      </div>
      <div className="serviceCards py-3 px-2">
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/homw_loan_ab05b23873.gif"
          title="Home Loan"
        />
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/home_interior_f5df2b4f3c.gif"
          title="Home Interior"
        />
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/zero_brokrage_d16c84899e.gif"
          title="Zero Brokrage Rentals"
        />
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/vastu_bea5d79de0.gif"
          title="Vastu"
        />
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/leagal_registration_d7444e9cb9.gif"
          title="Rent Agreement"
        />
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/escrow_256e564592.gif"
          title="Escrow"
        />
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/leagal_registration_d7444e9cb9.gif"
          title="Legal & Registration"
        />
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/property_inspection_ca58ed096a.gif"
          title="Property Inspection"
        />
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/packagers_fc4e8e5114.gif"
          title="Packers & Movers"
        />
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/furnichure_0d23e24d7c.gif"
          title="Furniture"
        />
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/solar_054b0a693e.gif"
          title="Solar Rooftop"
        />
        <ServiceCard
          imgSrc="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/receipt_b9ee04faf0.gif"
          title="Receipt Generator"
        />
      </div>
    </div>
  );
};

export default ServicesTable;
