import React, { useContext, useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
// import Navbar from "../components/details/navbar/Navbar";
import ExpertForm from "../components/details/ExpertForm";
import BlogContent from "../components/details/blogContent/BlogContent";
import BlogCarousel from "../components/details/blogCarousel/BlogCarousel";
import BlogPosts from "../components/details/blogPosts/BlogPosts";
import ServicesTable from "../components/details/servicesTable/ServicesTable";
import { BlogsContext } from "../components/context/CustomContextApi";
import { useParams } from "react-router-dom";
import RecentPosts from "../components/details/blogPosts/RecentPosts";
import axios from "axios";
import Loader from "../components/loader";

const Blogs = () => {
  const [ads, setAds] = useState([]);

  const [dataHeight, setDataHeight] = useState(0);
  const [noAds, setNoAds] = useState(0);

  const { homedata } = useContext(BlogsContext);

  const params = useParams();

  const data =
    homedata && homedata.data
      ? homedata.data.filter((item) => item.id == params.id)
      : [];

  const [keywords, setKeywords] = useState("");
  const [description, setDescription] = useState("");

  const getAds = () => {
    axios
      .get("https://strapi-prod.homznoffiz.com/api/ad?populate=*")
      .then((res) => {
        // console.log(res?.data?.data?.attributes?.images);
        setAds(res?.data?.data?.attributes?.images.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  function getRandomAd(max) {
    let url = "";
    if (ads.length > 0) {
      const val = Math.floor(Math.random() * max);
      url = ads[val].attributes.url;
    }
    return url;
  }

  useEffect(() => {
    if (data && data.length) {
      let d = "";
      let k = "";
      const item = data[0];
      k +=
        item.attributes.main_title +
        "," +
        item.attributes.slug_name +
        "," +
        item.attributes.category +
        "," +
        item.attributes.sub_category;
      d += item.attributes.blog_info.main_content + ",";
      setKeywords(k);
      setDescription(d);
    }
  }, [data]);

  useEffect(() => {
    // const interval = setTimeout(() => {
    getAds();
    // }, 3000);

    if (document.getElementById("rightAd")) {
      // console.log(document.getElementById("rightAd").clientHeight);
      const h = document.getElementById("rightAd").clientHeight;
      if (dataHeight) {
        const dH = dataHeight - h;
        const val = Math.floor((dataHeight - dH) / 350);
        console.log(val);
        setNoAds(val);
      }
    }

    return () => {
      // clearTimeout(interval);
    };
  }, [dataHeight]);

  // console.log(noAds);

  return (
    <Layout
      title="HomzNOffiz - Blog Details"
      description={description}
      keywords={keywords}
    >
      {/* <Navbar /> */}
      {data && data.length > 0 && homedata ? (
        <div>
          <section className="mainSection d-flex  mt-3 gap-4">
            <div className="left" style={{ maxWidth: "70%" }}>
              {data.length > 0 ? (
                <BlogContent data={data} setDataHeight={setDataHeight} />
              ) : (
                <></>
              )}

              <div
                className="carouselSection blog_carousel"
                style={{ marginTop: "10px" }}
              >
                <BlogCarousel
                  sub_category={data[0]?.attributes?.sub_category}
                />
              </div>
            </div>

            <div
              className="right d-flex  flex-column"
              style={{ minWidth: "30%" }}
            >
              <ExpertForm />
              <RecentPosts title="Recent Postes" />
              <BlogPosts
                title="More From Category"
                category={data[0]?.attributes?.category}
              />
              <ServicesTable />
              <div
                style={{
                  minWidth: "30%",
                  // background: "#1A2333",
                  // height: "487px",
                  height: "100%",
                  marginTop: "10px",
                }}
                className="d-flex flex-column text-white"
                id="rightAd"
              >
                {noAds > 0 &&
                  ads.length > 0 &&
                  [...Array(noAds).keys()].map((key) => (
                    <img
                      key={key}
                      src={getRandomAd(ads.length)}
                      className="w-100 h-100 object-fit-fill "
                    />
                  ))}
              </div>
            </div>
          </section>
          {/* {ads.length > 0 && (
            <section
              className="mt-4 gap-4"
              // style={{ maxWidth: "95%", margin: "0 auto" }}
            >
              <div
                style={{
                  minWidth: "100%",
                  // background: "#1A2333",
                  // height: "200px",
                }}
                className="d-flex"
              >
                <img
                  src={getRandomAd(ads.length)}
                  className="w-100 h-100 object-fit-fill "
                />
                <img
                  src={getRandomAd(ads.length)}
                  className="w-100 h-100 object-fit-fill "
                />
                <img
                  src={getRandomAd(ads.length)}
                  className="w-100 h-100 object-fit-fill "
                />
              </div>
            </section>
          )} */}
        </div>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default Blogs;
