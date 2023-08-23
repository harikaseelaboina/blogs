import React, { useRef } from "react";
import "./cards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Keyboard, Autoplay } from "swiper";

// import { Pagination, Navigation, Keyboard } from "swiper";
// import ReactMarkdown from "react-markdown";
// import remarkGfm from "remark-gfm";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//Images
import logoSmall from "../../../../assets/blogs/LOGO_CORNER.png";
import PlayButton from "../../../playButton";

import { useNavigate } from "react-router-dom";

import CryptoJS from "crypto-js";

const Cards = (props) => {
  const data = props.data;

  const navigate = useNavigate();

  const progressCircleRef = useRef(null);
  const progressContentRef = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircleRef.current && progressContentRef.current) {
      progressCircleRef.current.style.setProperty("--progress", 1 - progress);
      progressContentRef.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const encryptVideoLink = (link) => {
    const data = CryptoJS.AES.encrypt(link, "12345678").toString();
    // console.log(data);
    navigate(`/playVideo/${data}`);
    // window.open(`/playVideo/${data}`, "_blank");
  };

  return (
    <div className="text-white">
      <div>
        {data && data.length > 0 && (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            navigation={true}
            pagination={false}
            keyboard={true}
            loop={true}
            modules={[Navigation, Pagination, Keyboard, Autoplay]}
            // modules={[Navigation, Pagination, Keyboard]}
            className="mySwiper mt-1 bg-transparent"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
          >
            {data.slice(0, 4).map((item, index) => (
              <SwiperSlide key={index}>
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
                  className="row position-relative upper-card"
                  style={{
                    height: "20rem",
                    margin: "0",
                    background: props.bgColor ? props.bgColor : "black",
                  }}
                >
                  <div
                    className="col-md-6 mb-md-0 p-md-0 h-100"
                    style={{ width: "40%" }}
                  >
                    <img
                      src={
                        item?.attributes?.blog_info?.image?.data[0]?.attributes
                          ?.url
                      }
                      className="w-100 h-100  rounded-start-4 upper-image"
                      alt="..."
                    />
                  </div>
                  <div
                    className="col-12 col-md-6 py-2 p-md-3 "
                    style={{ height: "20rem", width: "60%" }}
                  >
                    <div
                      className="text-white mt-1"
                      style={{ fontSize: "1.5rem", fontWeight: "700", }}
                    >
                      {item.attributes.main_title}
                    </div>
                    <p
                      className="text-white  mt-1 mb-2"
                      style={{ height: "15rem", overflow: "hidden", }}
                    >
                      {item.attributes.blog_info.main_content.slice(0, 350)}...
                    </p>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
        {/* <div className="autoplay-progress" slot="container-end">          
          <span ref={progressContentRef}></span>
        </div> */}
      </div>
      <div
        className="lower-card"
        style={{ padding: "0", margin: "0", height: "14rem", border: "" }}
      >
        <Swiper
          // slidesPerView={3}
          breakpoints={{
            992: {
              slidesPerView: 3,
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
          spaceBetween={10}
          navigation={true}
          pagination={false}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard]}
          className="mySwiper mt-4 bg-transparent"
        >
          {data?.slice(5).map((item, index) => (
            <SwiperSlide key={index}>
              <a
                href={`/details/${item.id}`}
                className="card rounded-4"
                style={{
                  height: "12rem",
                  padding: "0",
                  backgroundImage: `url(${item?.attributes?.blog_info?.image?.data[0]?.attributes?.url})`,
                }}
              >
                <div className="card-upper">
                  <img src={logoSmall} alt="..." />
                </div>
                <div className="card-lower rounded-2 p-1 bg-black opacity-75">
                  <span
                    className="text-upper"
                    style={{
                      fontSize: "1.1rem",
                      color: "white",
                      height: "2rem",
                      overflow: "hidden",
                      padding: "0.1rem",
                    }}
                  >
                    {/* <ReactMarkdown
                      children={item.attributes.main_title.slice(0, 20)}
                      remarkPlugins={[remarkGfm]}
                    /> */}
                    {item.attributes.main_title.slice(0, 20)}...
                  </span>
                  <span
                    className="text-lower"
                    style={{
                      fontSize: "12px",
                      color: "white",
                      height: "2.5rem",
                      overflow: "hidden",
                      padding: "0.1rem",
                    }}
                  >
                    {/* <ReactMarkdown
                      children={item.attributes.blog_info.main_content.slice(
                        0,
                        20
                      )}
                      remarkPlugins={[remarkGfm]}
                    /> */}
                    {item.attributes.blog_info.main_content.slice(0, 75)}..
                  </span>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Cards;
