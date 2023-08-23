import React, { Fragment, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation, Keyboard, Autoplay } from "swiper";

// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import clock from "../../../assets/blogs/Clock.png";
import book from "../../../assets/blogs/book.png";

import PlayButton from "../../playButton";

import { useNavigate } from "react-router-dom";

import CryptoJS from "crypto-js";

const NewsCarousel = (props) => {
  const data = props.data;

  console.log(data);

  const progressCircleRef = useRef(null);
  const progressContentRef = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircleRef.current && progressContentRef.current) {
      progressCircleRef.current.style.setProperty("--progress", 1 - progress);
      progressContentRef.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const cardStyle = {
    // width: "100%",
    // margin: "0 auto",
    border: "none",
    // background: "linear-gradient(rgba(0, 0, 0, 0.237),rgba(0,0,0,0.237))",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    // minHeight: "100%",
    // height: "52.3vh",
  };

  const navigate = useNavigate();

  const encryptVideoLink = (link) => {
    const data = CryptoJS.AES.encrypt(link, "12345678").toString();
    console.log(data);
    navigate(`/playVideo/${data}`);
    // window.open(`${data}`, "_blank");
  };

  return (
    <div
      // className="news-carousel"
      style={{
        width: "100%",

        height: "82%",
        // border:"2px red solid"
      }}
    >
      {data && data.length > 0 && (
        <Swiper
          // slidesPerView={1}
          spaceBetween={15}
          loop={true}
          // loopedSlides="auto"
          navigation={true}
          pagination={false}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          className="mySwiper my-3 bg-transparent"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 1,
            },
            620: {
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 2,
            },
            1000: {
              slidesPerView: 1,
            },
            1500: {
              slidesPerView: 1,
            },
          }}
          // onAutoplayTimeLeft={onAutoplayTimeLeft}
        >
          {data.map((item, key) => {
            return (
              <SwiperSlide key={key}>
                <div
                  className=" position-absolute z-1"
                  style={{
                    right: 10,
                    top: 10,
                  }}
                >
                  {item?.attributes?.blog_info?.video_link && (
                    <PlayButton
                      onClick={() => {
                        encryptVideoLink(
                          item?.attributes?.blog_info?.video_link
                        );
                      }}
                    />
                  )}
                </div>
                <a
                  href={`/details/${item.id}`}
                  className="card w-100 d-flex flex-column justify-content-end "
                  style={{
                    ...cardStyle,
                    backgroundColor: "#242c4a",

                    height: "24rem",
                    // backgroundImage: `url(${item?.attributes?.blog_info?.image?.data?.[0].attributes.url})`,
                  }}
                >
                  <div>
                    <div
                      className="d-flex  flex-column justify-content-start"
                      style={{
                        ...cardStyle,
                        backgroundColor: "#242c4a",
                        backgroundSize: "100% 100%",
                        height: "24rem",
                        backgroundImage: `url(${item?.attributes?.blog_info?.image?.data?.[0].attributes.url})`,
                      }}
                    >
                      {/* <img
                        src={
                          item?.attributes?.blog_info?.image?.data?.[0]
                            .attributes.url
                        }
                        alt="hel"
                        style={{
                          width: "30rem",
                          height: "14rem",

                          objectFit: "contain",
                          // borderRadius: "10px",
                        }}
                      /> */}
                    </div>
                    <div className="position-absolute bottom-0 bg-black w-100 p-3 bg-opacity-75 ">
                    <div style={{  }} className="py-2">
                      <span className="badge text-bg-light rounded-pill me-2 p-2 ">
                        {item?.attributes?.Type_of_property}
                      </span>
                      <span className="badge text-bg-light rounded-pill me-2 p-2">
                        {item?.attributes?.city}
                      </span>
                    </div>
                    <div className="h5 text-white text-start">
                      {item?.attributes?.main_title}
                    </div>
                    <div
                      style={{ fontSize: "15px" }}
                      className="d-flex flex-row justify-content-between"
                    >
                      <span className="text-white d-flex flex-row align-items-center fw-bold">
                        <img
                          src={clock}
                          alt="..."
                          style={{ width: "30px", height: "30px" }}
                        />
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

export default NewsCarousel;
