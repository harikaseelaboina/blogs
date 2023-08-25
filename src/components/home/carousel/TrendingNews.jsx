import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper";
import TitleBar from "../TitleBar";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import trending from "../../../assets/blogs/trending gif.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { BlogsContext } from "../../context/CustomContextApi";

const TrendingNews = (props) => {
  // const TrendingNewsData=props.TrendingNewsData
  const { TrendingNewsData } = useContext(BlogsContext);

  const dt = new Date();
  let currDate = dt.toDateString();
  const cardStyle = {
    width: "100%",
    margin: "0 auto",
    border: "none",
    cardBody: {
      // backgroundColor: "rgb(26, 35, 51)",
      // backgroundColor: "#BBA592",
      backgroundColor: "black",
      textAlign: "justify",
      borderBottomRightRadius: "20px",
      borderBottomLeftRadius: "20px",
    },
    text: {
      fontSize: "1rem",
    },
    title: {
      fontSize: "1.25rem",
      fontWeight: "700",
    },
  };
  return (
    <>
      <TitleBar title="Trending News" link="/blogs" data={TrendingNewsData} />
      <Swiper
        // slidesPerView={3}
        breakpoints={{
          992: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          380: {
            slidesPerView: 1,
          },
        }}
        spaceBetween={20}
        navigation={true}
        pagination={false}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper my-3 bg-transparent"
      >
        {TrendingNewsData.map((item, index) => (
          <SwiperSlide key={index}>
            <a
              href={`/details/${item.id}`}
              className="card text-white"
              style={cardStyle}
            >
              <img
                src={
                  item?.attributes?.blog_info?.image?.data[0]?.attributes?.url
                }
                className=" rounded-top-4 "
                alt="..."
                style={{ height: "13.0rem" }}
              />
              <span className="d-flex flex-row justify-content-end fixed-top p-1">
                <img
                  src={trending}
                  alt="..."
                  style={{
                    width: "2.8rem",
                    height: "2.8rem",
                  }}
                />
              </span>
              <div className="card-body" style={cardStyle.cardBody}>
                <div
                  style={{
                    height: "3.5rem",
                    overflow: "hidden",
                    fontSize: "0.8rem",
                  }}
                >
                  <span className="card-title" style={cardStyle.title}>
                    {/* <ReactMarkdown
                    children={item.attributes.main_title.slice(0, 50)}
                    remarkPlugins={[remarkGfm]}
                  /> */}
                    {item.attributes.main_title.slice(0, 40)}...
                  </span>
                </div>
                <div style={{ height: "8rem", overflow: "hidden" }}>
                  <p className="card-text pt-4 " style={cardStyle.text}>
                    {/* <ReactMarkdown
                    children={item?.attributes?.blog_info?.main_content.slice(
                      0,
                      270
                    )}
                    remarkPlugins={[remarkGfm]}
                  /> */}
                    {item.attributes.blog_info.main_content.slice(0, 110)}...
                  </p>
                </div>

                <div className="d-flex flex-row justify-content-between align-items-center">
                  <div className=" d-flex flex-row ">
                    <span
                      style={{ width: "2.2rem", height: "2.2rem" }}
                      className="col-6 me-2 d-flex flex-row"
                    >
                      <img
                        src={
                          item.attributes?.authors?.data?.[0]?.attributes
                            ?.author_image?.data?.attributes?.url
                        }
                        alt="..."
                        className="img-fluid rounded-circle"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </span>
                    <div
                      className=""
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        margin: "auto",
                      }}
                    >
                      <span
                        style={{
                          display: "inline",
                          fontSize: "0.8rem",
                          fontWeight: "700",
                        }}
                      >
                        {
                          item.attributes?.authors?.data?.[0]?.attributes
                            ?.author_name
                        }
                      </span>

                      <span style={{ fontSize: "0.65rem", margin: "0" }}>
                        {/* {item.attributes.blog_info.published_date} */}

                        {new Date(item.attributes.blog_info.published_date)
                          .toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })
                          .replace(/\//g, "-")}
                      </span>
                    </div>
                  </div>
                  <div className="col-4 d-flex flex-row align-items-center">
                    <span className="me-2">
                      <img
                        src="https://media1.giphy.com/media/xT77Y1T0zY1gR5qe5O/giphy.gif?cid=ecf05e47y8kfbhh3f0eoaza8ndw47dvcxkirqquczluy9vby&ep=v1_gifs_search&rid=giphy.gif&ct=g"
                        alt="..."
                        className="rounded-circle"
                        style={{ width: "1.5rem" }}
                      />
                    </span>
                    <span
                      className="pe-1"
                      style={{ fontSize: "0.8rem", fontWeight: "700" }}
                    >
                      {item?.attributes?.blog_info?.read_time}
                    </span>
                    <span style={{ fontSize: "0.8rem" }}>minutes</span>
                  </div>
                </div>
              </div>
            </a>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide></SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default TrendingNews;
