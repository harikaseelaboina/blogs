import React, { useContext } from "react";
// import TitleBar from "../TitleBar";

// import EditorArticles from "./editorsarticles";
// import MainNewsCarousel from "./mainnewscarousel";
import { BlogsContext } from "../../context/CustomContextApi";
import Luxurycarousel from "./luxuryprojects";
// import "./styles.css";

const LuxuryProjects = (props) => {
  const { MainnewsData, EditorsData } = useContext(BlogsContext);
  const mainStyle = {
    // width: "100%",
    // margin: "0 auto",
    minHeight: "100%",
    marginBottom:"1rem"
  };
  return (
    <>
      <div
        className="row d-flex flex-lg-row flex-md-column flex-sm-column"
        style={mainStyle}
      >
        <div className=" col-lg-12 col-md-12 ">
         
          
        <div style={{height:"27rem"}} >
          <Luxurycarousel data={MainnewsData} />
          </div>
        </div>
        
      </div>
    </>
  );
};

export default LuxuryProjects;
