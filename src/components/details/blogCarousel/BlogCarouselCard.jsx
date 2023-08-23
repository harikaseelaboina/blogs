import React from "react";
import { useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogCarouselCard = ({ data }) => {
  const naviagate = useNavigate();

  return (
    <div
      className="blogCarouselCard rounded-4"
      onClick={() => {
        naviagate(`/details/${data.id}`);
      }}
    >
      <div
        className="w-100"
        style={{
          height: "150px",
        }}
      >
        <img
          className="h-100 w-100 object-fit-fill rounded-top-4"
          src={data?.attributes?.blog_info?.image?.data?.[0]?.attributes?.url}
          alt="Loading..."
        />
      </div>
      <div className="cardContent p-3">
        <div
          className="card_title"
          style={{ height: "2rem", overflow: "hidden", fontSize: "1.1rem" }}
        >
          {/* <ReactMarkdown
            children={data?.attributes?.main_title.slice(0, 30)}
            remarkPlugins={[remarkGfm]}
          /> */}
          {data?.attributes?.main_title?.slice(0, 30)}
        </div>
        <div
          className="m-0"
          style={{ height: "5rem", overflow: "hidden", fontSize: "0.8rem" }}
        >
          {/* <ReactMarkdown
            children={data?.attributes?.blog_info?.main_content.slice(0, 150)}
            remarkPlugins={[remarkGfm]}
          /> */}
          {data?.attributes?.blog_info?.main_content.slice(0, 130)}...
        </div>
        <div className="cardProfile mt-2 d-flex align-items-center justify-content-between">
          <div className="left d-flex align-items-center justify-content-start gap-2">
            <img
              src={
                data.attributes?.authors?.data?.[0].attributes?.author_image
                  ?.data?.attributes?.url
              }
              alt="Loading..."
            />
            <div className="aboutProfile">
              <h6 className="m-0" style={{ fontSize: "0.8rem" }}>
                {data.attributes?.authors?.data?.[0].attributes?.author_name}
              </h6>
              <p className="m-0" style={{ fontSize: "0.6rem" }}>
                {data?.attributes?.blog_info?.published_date}
              </p>
            </div>
          </div>
          <div className="right d-flex justify-content-center align-items-center">
            <img
              style={{
                height: "20px",
              }}
              src={
                "https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/Alarm_Clock_GIF_Animation_High_Res_6bb6171f24.gif"
              }
              alt="Loading..."
            />
            <p
              className="m-0"
              style={{
                fontSize: "10px",
              }}
            >
              <span className="text-primary">
                {data.attributes?.blog_info?.read_time}&nbsp;min
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCarouselCard;
