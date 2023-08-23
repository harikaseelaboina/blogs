import React, { useContext } from "react";
import TitleBar from "../TitleBar";
import Article from "./articles/Article";
import Cards from "./cards/Cards";
import { BlogsContext } from "../../context/CustomContextApi";
const AadharCard = (props) => {
  // const GovtIdentityData=props.GovtIdentityData;
  const { GovtIdentityData } = useContext(BlogsContext);
  return (
    <>
      <TitleBar
        title="Government Identities"
        link="/blogs"
        data={GovtIdentityData}
      />
      <div className="row mt-3 d-flex flex-lg-row flex-md-column cardContainer">
        <div className="col-lg-8 col-md-12 d-flex flex-column d-flex flex-column justify-content-between">
          <Cards data={GovtIdentityData} />
        </div>
        {/* <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-start article-aside d-none d-lg-block"> */}
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-start article-aside ">
          <Article data={GovtIdentityData} />
        </div>
      </div>
    </>
  );
};

export default AadharCard;
