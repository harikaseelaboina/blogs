import React, { useContext } from "react";
import "./blogPosts.css";
import Post from "./Post";
import img1 from "../../../assets/blogsPage/heroImg.png";
import img3 from "../../../assets/blogsPage/img.png";
import { BlogsContext } from "../../context/CustomContextApi";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogPosts = ({ title, category }) => {
  const { homedata } = useContext(BlogsContext);
  const data =
    homedata && homedata.data
      ? homedata.data.filter((item) => item?.attributes?.category === category)
      : [];
  return (
    // <div className="blogPosts p-2" style={{ marginBottom: "5px" }}>
    //   <div className="blogPosts_title position-relative mb-3">
    //     <h4 className="text-white m-0 fs-5 fw-bold">{title}</h4>
    //   </div>
    //   <div style={{ maxHeight: "38rem", minHeight: "20rem", overflow: "auto" }}>
    //     {data.map((item, index) => (
    //       <a
    //         href={`/details/${item.id}`}
    //         className="post d-flex align-items-center  gap-2"
    //         key={index}
    //       >
    //         <div className="post_img">
    //           <img
    //             src={
    //               item.attributes?.blog_info?.image?.data?.[0]?.attributes?.url
    //             }
    //             style={{ width: "90px" }}
    //             alt="loading..."
    //           />
    //         </div>
    //         <div>
    //           <h3 className=" text-white" style={{ fontSize: "15px" }}>
    //             {/* <ReactMarkdown
    //               children={item.attributes?.main_title}
    //               remarkPlugins={[remarkGfm]}
    //             /> */}
    //             {item.attributes?.main_title}
    //           </h3>
    //           {/* <p className="m-0 text-white">In News</p> */}
    //           <p className="m-0 text-white">
    //             {item.attributes?.blog_info?.published_date}
    //           </p>
    //         </div>
    //       </a>
    //     ))}
    //   </div>
    // </div>

    <div
      className="blog p-2"
      style={{
        marginBottom: "5px",
        marginTop: "5px",
        backgroundColor: "#1A2333",
      }}
    >
      <div className="blogPosts_title position-relative mb-3">
        <h4 className="text-white m-0 fs-5 fw-bold">{title}</h4>
      </div>
      <div style={{ maxHeight: "35rem", minHeight: "20rem", overflow: "auto" }}>
        {data.map((item, index) => (
          <a
            href={`/details/${item.id}`}
            className="post gap-2"
            style={{
              backgroundColor: "#0e1420",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              margin: "5px",
            }}
            key={index}
          >
            <div>
              <img
                src={
                  item.attributes?.blog_info?.image?.data?.[0]?.attributes?.url
                }
                style={{ width: "90px", height: "80px" }}
                alt="loading..."
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                margin: "5px",
              }}
            >
              <h3
                className="text-white "
                style={{
                  textAlign: "start",
                  fontSize: "13px",
                  fontWeight: "bold",
                }}
              >
                {/* <ReactMarkdown
                  children={item.attributes?.main_title}
                  remarkPlugins={[remarkGfm]}
                /> */}
                {item.attributes?.main_title.slice(0, 35)}...
              </h3>
              <p
                className="m-0  mt-1"
                style={{ color: "gray", fontSize: "12px" }}
              >
                In News
              </p>
              <p className="m-0 text-white" style={{ fontSize: "12px" }}>
                {item.attributes?.blog_info?.published_date}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
