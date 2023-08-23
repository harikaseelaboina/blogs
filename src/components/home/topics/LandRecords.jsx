import React, { useContext } from "react";
import TitleBar from "../TitleBar";
import Article from "./articles/Article";
import Cards from "./cards/Cards";
import { BlogsContext } from "../../context/CustomContextApi";

const LandRecords = (props) => {
  // const LandRecordsData=props.LandRecordsData

  const { LandRecordsData } = useContext(BlogsContext);

  return (
    <>
      <TitleBar title="Land Records" link="/blogs" data={LandRecordsData}/>
      <div className="row mt-3 d-flex flex-lg-row flex-md-column cardContainer">
        <div className="col-lg-8 col-md-12 d-flex flex-column d-flex flex-column justify-content-between">
          <Cards data={LandRecordsData}/>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-between article-aside ">
          <Article data={LandRecordsData}/>
        </div>
      </div>
    </>
  );
};

export default LandRecords;
