import React, { useEffect, useState } from "react";
import "./blogContent.css";
import heroImg from "../../../assets/blogsPage/heroImg.png";
import shareIcon from "../../../assets/blogsPage/share.gif";
import tableLogo from "../../../assets/blogsPage/tableLogo.gif";
import checkMark from "../../../assets/blogsPage/checkMark.gif";
import img from "../../../assets/blogsPage/img.png";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useNavigate } from "react-router-dom";
import CryptoJS from "crypto-js";
import PlayButton from "../../playButton";

import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation, Keyboard, Autoplay } from "swiper";

// import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { toast } from "react-toastify";

const BlogContent = ({ data, setDataHeight }) => {
  const blog = data && data[0];

  // console.log(blog);

  const copyUrlToClipboard = (id) => {
    // console.log(window.location);
    // const currentUrl = `http://localhost:5173/details/${id}`;
    const currentUrl = window.location;
    navigator.clipboard.writeText(currentUrl);
    // alert("Link copied to clipboard!");
    toast.success("Copied");
  };

  const navigate = useNavigate();

  const encryptVideoLink = (link) => {
    const data = CryptoJS.AES.encrypt(link, "12345678").toString();
    // console.log(data);
    navigate(`/playVideo/${data}`);
  };

  const imgData = blog?.attributes?.blog_info?.image?.data;
  // console.log(imgData);

  // console.log("data", data);

  useEffect(() => {
    if (document.getElementById("data-height")) {
      const h = document.getElementById("data-height").clientHeight;
      setDataHeight(h);
    }

    return () => {};
  }, []);

  return (
    <div className="blogContent" id="data-height">
      <div className="title p-3 rounded-3 fs-2 fw-bold ">
        {/* <ReactMarkdown
          children={blog?.attributes?.main_title}
          remarkPlugins={[remarkGfm]}
        /> */}
        <p>{blog?.attributes?.main_title}</p>
      </div>
      <div
        className="blogHero_img position-relative mt-3"
        style={{ marginLeft: "0" }}
      >
        {/* <img
          style={{ width: "47.2rem", height: "24rem" }}
          src={blog?.attributes?.blog_info?.image?.data?.[0].attributes.url}
          alt="Loading"
        /> */}

        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          loop={true}
          navigation={true}
          pagination={false}
          keyboard={true}
          modules={[Navigation, Pagination, Keyboard, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {blog?.attributes?.blog_info?.image?.data?.map((imageData, index) => (
            <SwiperSlide key={index}>
              <img
                style={{ width: "86%" }}
                src={imageData?.attributes?.url}
                alt={`Image ${index + 1}`}
                className="blog_image"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          className=" sideimg share position-absolute p-3"
          style={{
            backgroundColor: "transperent",
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "14%",
            justifyContent: "space-between",
          }}
        >
          <div
            className="shareBtn"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              className="m-3 rounded-5"
              src={shareIcon}
              alt="loading"
              onClick={() => copyUrlToClipboard(blog.id)}
              style={{
                cursor: "pointer",
                width: "40px",
                height: "40px",
                zIndex: 1000,
              }}
              title={"Copy  link"}
            />
            <div className="z-1">
              {blog?.attributes?.blog_info?.video_link && (
                <PlayButton
                  onClick={() => {
                    encryptVideoLink(blog?.attributes?.blog_info?.video_link);
                  }}
                />
              )}
            </div>
          </div>
          <div className="d-flex justify-content-center ">
            <img
              src="https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/Alarm_Clock_GIF_Animation_High_Res_6bb6171f24.gif"
              style={{ height: "20px" }}
            />
            <p className="timetext">
              {blog?.attributes?.blog_info?.read_time} min
            </p>
          </div>
        </div>
      </div>
      <div
        className="aboutBlog mt-4 main_content"
        style={{
          fontSize: "15px",
        }}
      >
        {/* <ReactMarkdown
          children={blog?.attributes?.blog_info?.main_content}
          remarkPlugins={[remarkGfm]}
        /> */}
        <p className="m-0">{blog?.attributes?.blog_info?.main_content}</p>
      </div>
      <div
        className="blogTable p-2 mt-4"
        style={{
          fontSize: "15px",
        }}
      >
        <div className="table_title p-2 position-relative">
          <h2 className="m-0 fs-5 fw-bold">Table of Content</h2>
          <div className="titleLogo position-absolute d-flex align-items-center justify-content-center">
            <img src={tableLogo} alt="loading" />
          </div>
        </div>
        <div className="blogTable_container mt-2">
          <div className="Tablerow p-2 d-flex align-items-center justify-content-start">
            <table>
              <tbody>
                {blog?.attributes?.blog_info?.table &&
                  blog?.attributes?.blog_info?.table
                    .split("\n")
                    .map((line, index) => (
                      <tr key={index}>
                        <td>
                          <ReactMarkdown
                            children={line}
                            remarkPlugins={[remarkGfm]}
                          />
                          {/* {line} */}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div
        className="aboutBlog mt-4 whole_content"
        style={{
          fontSize: "15px",
        }}
      >
        <ReactMarkdown
          children={blog?.attributes?.blog_info?.whole_content}
          remarkPlugins={[remarkGfm]}
        />
        {/* <p className="m-0">{blog?.attributes?.blog_info?.whole_content}</p> */}
      </div>
      <div
        className="profile mt-5"
        style={{
          fontSize: "15px",
        }}
      >
        <div className="d-flex align-items-center justify-content-center gap-4">
          <img
            className="profileImg"
            src={
              blog.attributes?.authors?.data?.[0].attributes?.author_image?.data
                ?.attributes?.url
            }
            alt="loading"
          />
          <div className="about_profile">
            <h4 className="fw-bold">
              {blog.attributes?.authors?.data?.[0].attributes?.author_name}
            </h4>
            <p style={{ fontStyle: "italic" }}>
              {/* <ReactMarkdown
                children={
                  blog.attributes?.authors?.data?.[0].attributes?.author_details
                }
                remarkPlugins={[remarkGfm]}
              /> */}
              {blog.attributes?.authors?.data?.[0].attributes?.author_details}
            </p>
          </div>
        </div>
        <div className="publishDate d-flex align-items-center justify-content-end">
          <p>{blog?.attributes?.blog_info?.published_date}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogContent;
