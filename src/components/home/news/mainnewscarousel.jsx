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
import "./styles.css";

const MainNewsCarousel = (props) => {
  const data = props.data;
  // console.log(data);
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
    backgroundSize: "cover",
    borderBottomRightRadius: "2rem",
    borderBottomLeftRadius: "2rem",

    // minHeight: "100%",
    // height: "52.3vh",
  };
  const navigate = useNavigate();
  const encryptVideoLink = (link) => {
    const data = CryptoJS.AES.encrypt(link, "12345678").toString();
    // console.log(data);
    navigate(`/playVideo/${data}`);
    // window.open(`${data}`, "_blank");
  };

  return (
    <div
      className="maincar"
      style={{
        width: "100%",
        margin: "auto",

        // border:"2px red solid",
        marginTop: "0",
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
              slidesPerView: 1,
            },
            850: {
              slidesPerView: 1,
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
                  href={`/details/${item.id}/${item?.attributes?.slug_name}`}
                  className="card w-100 d-flex flex-column justify-content-end maincar"
                  style={{
                    ...cardStyle,
                    backgroundColor: "#242c4a",

                    // backgroundImage: `url(${item?.attributes?.blog_info?.image?.data?.[0].attributes.url})`,
                  }}
                >
                  <div>
                    <div
                      className="d-flex  flex-column justify-content-start maincar"
                      style={{
                        ...cardStyle,
                        backgroundColor: "#242c4a",
                        backgroundSize: "100% 100%",

                        marginTop: "0",
                        borderBottomRightRadius: "2rem",
                        borderBottomLeftRadius: "2rem",
                        backgroundImage: `url(${item?.attributes?.blog_info?.image?.data?.[0].attributes.url})`,
                      }}
                    ></div>
                    <div className="position-absolute  p-5 bg-opacity-50 mainnewtxt">
                      <div className="tittxt1 text-white text-start">
                        Main News
                      </div>

                      <div className="h3 text-white text-start tittxt">
                        {item?.attributes?.main_title}
                      </div>

                      <div
                        //   style={{ fontSize: "15px" }}
                        className="d-flex flex-row justify-content-between"
                      >
                        <div
                          className="tittxt2 text-white text-start col-11"
                          style={{ letterSpacing: "0.3px" }}
                        >
                          {item?.attributes?.blog_info.main_content.slice(
                            0,
                            400
                          )}
                          .....
                        </div>
                        {/* <span className="text-white d-flex flex-row align-items-center fw-bold">
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
                      </span> */}
                      </div>
                      <span
                          className="txt1 text-white d-flex justify-content-md-end justify-content-lg-end align-items-center fw-bold"
                          // style={{ marginLeft: "0" }}
                        >
                          <img src={book} alt="..." className="img1 h-100 " />
                          <span className="text-white px-1">
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
      )}
    </div>
  );
};

export default MainNewsCarousel;
