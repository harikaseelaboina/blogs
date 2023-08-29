import React, { useContext } from "react";
import TitleBar from "../TitleBar";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";
import { Link } from "react-router-dom";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import book from "../../../assets/blogs/book.png";
import admin from "../../../assets/blogs/Administrator Male.png";
import clock from "../../../assets/blogs/Clock.png";
import { BlogsContext } from "../../context/CustomContextApi";

const FeaturedNews = (props) => {
  // const FeaturedNewsData=props.FeaturedNewsData;
  const { FeaturedNewsData } = useContext(BlogsContext);
  const cardStyle = {
    width: "100%",
    height: "100%",
    margin: "0 auto",
    border: "none",
    // backgroundColor: "rgb(26, 35, 51)",
    background: "black",
    borderRadius: "20px",
  };
  const upper = {
    width: "100%",
    margin: "0 auto",
    imgDiv: {
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      borderBottomRightRadius: "15px",
      borderTopLeftRadius: "15px",
    },
  };
  const lower = {
    width: "100%",
    margin: "0 auto",
  };
  return (
    <div>
      <TitleBar title="Featured News" link="/blogs" data={FeaturedNewsData} />
      {FeaturedNewsData && FeaturedNewsData.length > 0 && (
        <Swiper
          // slidesPerView={3}
          breakpoints={{
            992: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            576: {
              slidesPerView: 2,
            },
            380: {
              slidesPerView: 1,
            },
          }}
          spaceBetween={10}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          navigation={true}
          pagination={false}
          keyboard={true}
          loop={true}
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          className="mySwiper my-3 bg-transparent"
        >
          {FeaturedNewsData.map((item, index) => {
            return (
              <SwiperSlide key={index}>
                <a
                  href={`/details/${item.id}/${item?.attributes?.slug_name}`}
                  className="card"
                  style={cardStyle}
                >
                  <div className="row d-flex flex-column" style={upper}>
                    <div
                      className="col-12 d-flex flex-row justify-content-end p-0"
                      style={{
                        backgroundImage: `url(${item?.attributes?.blog_info?.image?.data[0]?.attributes?.url})`,
                        ...upper.imgDiv,
                        height: "10rem",
                      }}
                    >
                      <span
                        className="bg-danger text-white fw-bold d-flex flex-column justify-content-center"
                        style={{
                          width: "2rem",
                          height: "2rem",
                          fontSize: "1rem",
                          textAlign: "center",
                          borderBottomLeftRadius: "10px",
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <div
                      className="col-11 text-white mt-1 ms-3"
                      style={{
                        fontSize: "0.8rem",
                        height: "6rem",
                        overflow: "hidden",
                        textAlign: "justify",
                      }}
                    >
                      {/* <ReactMarkdown
                          children={item.attributes?.blog_info?.main_content.slice(
                            0,
                            260
                          )}
                          remarkPlugins={[remarkGfm]}
                        /> */}
                      {item.attributes.blog_info.main_content.slice(0, 160)}
                      ...
                    </div>
                  </div>
                  <div className="row mt-2 mb-1" style={lower}>
                    <div className="col-8 d-flex flex-row ps-1">
                      <span
                        className="text-white d-flex flex-row align-items-center me-4"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <img
                          src={clock}
                          alt="..."
                          style={{ width: "20px", height: "20px" }}
                        />
                        {/* {item.attributes.blog_info.published_date} */}

                        {new Date(item.attributes.blog_info.published_date)
                          .toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })
                          .replace(/\//g, "-")}
                      </span>
                      <span
                        className="text-white d-flex flex-row align-items-center"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <img
                          src={
                            item.attributes?.authors?.data?.[0]?.attributes
                              ?.author_image?.data?.attributes?.url
                          }
                          alt="..."
                          style={{
                            width: "20px",
                            height: "20px",
                            borderRadius: "50px",
                            marginRight: "0.5rem",
                          }}
                        />
                        {
                          item.attributes?.authors?.data?.[0]?.attributes
                            ?.author_name
                        }
                      </span>
                    </div>
                    <div
                      className="col-4 text-white d-flex flex-row justify-content-end align-items-center pe-3"
                      style={{ fontSize: "0.8rem" }}
                    >
                      <img
                        src={book}
                        alt="..."
                        style={{ width: "30px", height: "30px" }}
                      />
                      <span className="text-primary px-1">
                        {item?.attributes?.blog_info?.read_time}
                      </span>
                      min
                    </div>
                  </div>
                </a>
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
};

export default FeaturedNews;
