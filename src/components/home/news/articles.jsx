import React from "react";
import clock from "../../../assets/blogs/Clock.png";
import book from "../../../assets/blogs/book.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Keyboard } from "swiper";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const Articles = (props) => {
  const data = props.data;

  const cardStyle = {
    width: "100%",
    margin: "0 auto",
    border: "none",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",

    borderRadius: "20px",
  };

  // const isSmallView = window.innerWidth <= 1023; // Set the breakpoint for mobile view

  // const divStyle = {
  //   width: isSmallView ? "100%" : "60%",

  // };

  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        {/* <div style={divStyle}> */}
        <div className="col-12 col-lg-12">
          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              navigation={true}
              pagination={false}
              keyboard={true}
              modules={[Navigation, Pagination, Keyboard]}
              className="mySwiper my-3 bg-transparent"
            >
              {Array.isArray(data) &&
                data.slice(0, 3).map((item, index) => (
                  <SwiperSlide key={index}>
                    <a
                      href={`/details/${item.id}`}
                      className="col-12 card d-flex flex-column justify-content-end"
                      style={{
                        ...cardStyle,
                        height: "12.5rem",
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.166),rgba(0, 0, 0, 0.144)),url(${item?.attributes?.blog_info?.image?.data?.[0].attributes.url})`,
                      }}
                    >
                      <div
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.8)",
                          borderBottomRightRadius: "20px",
                          borderBottomLeftRadius: "20px",
                        }}
                      >
                        <div
                          className="w-100 ps-5 my-1"
                          style={{ fontSize: "12px" }}
                        >
                          <span className="badge text-bg-light bg-opacity-75 rounded-pill px-3 py-2 mx-2">
                            {item.attributes.Type_of_property}
                          </span>
                          <span className="badge text-bg-light bg-opacity-75 rounded-pill px-3 py-2 mx-2">
                            {item.attributes.city}
                          </span>
                        </div>
                        <div className="h5 text-white text-start ps-4 my-1">
                          {/* <ReactMarkdown
                      children={item.attributes?.main_title}
                      remarkPlugins={[remarkGfm]}
                    /> */}
                          {item.attributes.main_title.slice(0, 30)}...
                        </div>
                        <div
                          style={{ fontSize: "13px" }}
                          className="d-flex flex-row justify-content-between px-3 my-2"
                        >
                          <span className="text-white d-flex flex-row align-items-center fw-bold">
                            <img
                              src={clock}
                              alt="..."
                              style={{ width: "30px", height: "30px" }}
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
                          <span className="text-white d-flex flex-row align-items-center fw-bold">
                            <img
                              src={book}
                              alt="..."
                              style={{ width: "30px", height: "30px" }}
                            />
                            <span className="text-white px-1">
                              {item?.attributes?.blog_info?.read_time}
                            </span>
                            minutes
                          </span>
                        </div>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className="d-flex flex-row">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              navigation={true}
              pagination={false}
              keyboard={true}
              modules={[Navigation, Pagination, Keyboard]}
              className="mySwiper my-2 bg-transparent"
            >
              {Array.isArray(data) &&
                data.slice(4, 8).map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <a
                        href={`/details/${item.id}`}
                        className="card d-flex flex-column justify-content-end  me-2"
                        style={{
                          ...cardStyle,
                          height: "10rem",
                          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.166),rgba(0, 0, 0, 0.144)),url(${item?.attributes?.blog_info?.image?.data?.[0].attributes.url})`,
                        }}
                      >
                        <div
                          style={{
                            backgroundColor: "rgba(0, 0, 0, 0.8)",
                            borderBottomRightRadius: "10px",
                            borderBottomLeftRadius: "10px",
                          }}
                        >
                          <div
                            className="h5 text-white text-start ps-4 my-2"
                            style={{ fontSize: "15px", fontWeight: "bold" }}
                          >
                            {/* <ReactMarkdown
                          children={item.attributes.main_title.slice(0, 30)}
                          remarkPlugins={[remarkGfm]}
                        /> */}
                            {item.attributes.main_title.slice(0, 20)}...
                          </div>
                          <div
                            style={{ fontSize: "9px" }}
                            className="d-flex flex-row justify-content-between px-3 my-2"
                          >
                            <span
                              className="text-white d-flex flex-row align-items-center fw-bold"
                              style={{
                                fontWeight: "bold",
                              }}
                            >
                              <img
                                src={clock}
                                alt="..."
                                style={{
                                  width: "30px",
                                  height: "30px",
                                  fontWeight: "bold",
                                }}
                              />
                              {/* {item.attributes.blog_info.published_date} */}
                              {new Date(
                                item.attributes.blog_info.published_date
                              )
                                .toLocaleDateString("en-GB", {
                                  day: "2-digit",
                                  month: "2-digit",
                                  year: "numeric",
                                })
                                .replace(/\//g, "-")}
                            </span>
                            <span className="text-white d-flex flex-row align-items-center fw-bold">
                              <img
                                src={book}
                                alt="..."
                                style={{
                                  width: "20px",
                                  height: "20px",
                                }}
                              />
                              <span
                                className="text-white px-1"
                                style={{
                                  fontWeight: "bold",
                                }}
                              >
                                {item?.attributes?.blog_info?.read_time}
                              </span>
                              minutes
                            </span>
                          </div>
                        </div>
                      </a>
                    </SwiperSlide>
                  );
                })}
            </Swiper>
          </div>
        </div>

        {/* <div className="d-none d-lg-block">
          <div
            className="  "
            style={{
              height: "24rem",
              marginLeft: "5px",
              margin: "15px",
              backgroundColor: "#242c4a",
              borderRadius: "10px",
            }}
          >
            <div
              className="listContainer"
              style={{ height: "23rem", backgroundColor: "transparent" }}
            >
              {data?.slice(8).map((item, index) => (
                <a
                  href={`/details/${item.id}`}
                  className="row g-0 position-relative card my-1"
                  key={index}
                >
                  <div className="col-md-5 mb-md-0 p-md-0">
                    <img
                      src={
                        item?.attributes?.blog_info?.image?.data[0]?.attributes
                          ?.url
                      }
                      className="rounded-start-4 cardImg"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-7 ps-md-2 cardText">
                    <span className="title text-white">
                      {item.attributes.main_title.slice(0, 25)}..
                    </span>

                    <div className="icons d-flex p-1">
                      <div className="text-white d-flex flex-row align-items-center item-1">
                        <img src={clock} alt="..." width={20} />
                        {new Date(item.attributes.blog_info.published_date)
                          .toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          })
                          .replace(/\//g, "-")}
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Articles;
