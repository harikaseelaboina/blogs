import React, { useContext } from "react";
import TitleBar from "../TitleBar";
import Articles from "./articles";
import NewsCarousel from "./newsCarousel";
import { BlogsContext } from "../../context/CustomContextApi";
const RealEstateNews = (props) => {
 
  // const RealEstateNewsData = props.RealEstateNewsData

  const { RealEstateNewsData } = useContext(BlogsContext);

  const mainStyle = {
    minHeight: "100%",
  };
  return (
    <>
      <TitleBar title="Real Estate News" link="/blogs" data={RealEstateNewsData} />
      <div
        className="row w-100 my-0 mx-auto d-flex flex-lg-row flex-md-column flex-sm-column"
        style={mainStyle}
      >
        <div className="newsCarousel col-lg-6 col-md-12 pe-2">
          <NewsCarousel data={RealEstateNewsData}/>
        </div>
        <div className="articleList col-lg-6 col-md-12 ps-2">
          <Articles data={RealEstateNewsData} />
        </div>
      </div>
    </>
  );
};

export default RealEstateNews;
