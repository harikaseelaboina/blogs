import React from "react";
import "./article.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import clock from "../../../../assets/blogs/Clock.png";
import book from "../../../../assets/blogs/book.png";

const Article = (props) => {
  const data = props.data;
  return (
    <div
      className="articlesList rounded-4 "
      style={{
        height: "33.5rem",
        background: props.bgColor ? props.bgColor : "black",
      }}
    >
      <div className="listContainer" style={{ height: "32rem" }}>
        {/* // <div className="articlesList rounded-4 "  >
        //  <div className="listContainer" > */}
        {data?.map((item, index) => (
          <a
            href={`/details/${item.id}`}
            className="row g-0 position-relative card my-1"
            key={index}
          >
            <div className="col-md-5 mb-md-0 p-md-0">
              <img
                src={
                  item?.attributes?.blog_info?.image?.data[0]?.attributes?.url
                }
                className="rounded-start-4 cardImg"
                alt="..."
              />
            </div>
            <div className="col-md-7 ps-md-2 cardText">
              <span className="title text-black">
                {/* <ReactMarkdown
                  children={item.attributes.main_title.slice(0, 20)}
                  remarkPlugins={[remarkGfm]}
                /> */}
                {item.attributes.main_title.slice(0, 40)}..
              </span>
              <span className="description text-black pe-2">
                {/* <ReactMarkdown
                  children={item.attributes.blog_info.main_content.slice(0, 50)}
                  remarkPlugins={[remarkGfm]}
                /> */}
                {item.attributes.blog_info.main_content.slice(0, 50)}..
              </span>
              <div className="icons d-flex p-1">
                <div className="text-black d-flex flex-row align-items-center item-1">
                  <img src={clock} alt="..." width={20} />
                  {/* {item.attributes.blog_info.published_date} */}
                  {new Date(item.attributes.blog_info.published_date)
                    .toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                    })
                    .replace(/\//g, "-")}
                </div>
                <div className="text-black d-flex flex-row align-items-center item-2">
                  <img src={book} alt="..." width={20} />
                  <span className="text-black mx-1" style={{
                    fontWeight: "700",
                  }}>
                    {item?.attributes?.blog_info?.read_time}
                  </span>
                  min
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Article;
