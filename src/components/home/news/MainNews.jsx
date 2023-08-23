import React, { useContext } from "react";
import TitleBar from "../TitleBar";

import Articles from "./articles";
import NewsCarousel from "./newsCarousel";
import { BlogsContext } from "../../context/CustomContextApi";

const MainNews = (props) => {
  const { MainnewsData, EditorsData } = useContext(BlogsContext);
  const mainStyle = {
    // width: "100%",
    // margin: "0 auto",
    minHeight: "100%",
  };
  return (
    <>
      <div
        className="row d-flex flex-lg-row flex-md-column flex-sm-column"
        style={mainStyle}
      >
        <div className=" col-lg-5 col-md-12 ">
          <TitleBar title="Main News"  data={MainnewsData} tag="mainnews" />
          <NewsCarousel data={MainnewsData} />
        </div>
        <div className="articleList col-lg-7 col-md-12 ps-2">
          <TitleBar title="Editor's Pick"  data={EditorsData}  tag="editors-pick"/>
          <Articles data={EditorsData} />
        </div>
      </div>
    </>
  );
};

export default MainNews;
