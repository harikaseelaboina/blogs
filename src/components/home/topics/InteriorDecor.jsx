import React, { useContext } from "react";
import TitleBar from "../TitleBar";
import Article from "./articles/Article";
import Cards from "./cards/Cards";
import { BlogsContext } from "../../context/CustomContextApi";
const InteriorDecor = (props) => {
  // const InteriorDecorData =props.InteriorDecorData
  const { InteriorDecorData } = useContext(BlogsContext);
  return (
    <>
      <TitleBar title="Interior & Decor" link="/blogs" data={InteriorDecorData} />
      <div className="row mt-3 d-flex flex-lg-row flex-md-column cardContainer">
        <div className="col-lg-8 col-md-12 d-flex flex-column d-flex flex-column justify-content-between">
          <Cards bgColor={props.bgColor} data={InteriorDecorData}/>
        </div>
        <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-start article-aside ">
          {/* <div className="col-lg-4 col-md-12 col-sm-12 d-flex flex-column justify-content-start article-aside d-none d-lg-block"> */}
        
          <Article bgColor={props.bgColor} data={InteriorDecorData} />
        </div>
      </div>
    </>
  );
};

export default InteriorDecor;
