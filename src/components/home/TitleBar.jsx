import React from "react";
import { useNavigate } from "react-router-dom";

const TitleBar = (props) => {
  const title = props.title;
  const link = props.link;
  const data = props.data;
  // const tag=props.tag

  // console.log("titlebar");
  // console.log(data)

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/blogs/${title}`, { state: { data: data, title: title } });
  };
  return (
    <>
      <div className="heading rounded-start-4 d-flex flex-row justify-content-between">
        <span
          className="title text-black fs-5 fw-bolder"
          style={{  }}
        >
          {title}
        </span>
        <span className="link">
          <button
            className="text-white"
            onClick={handleNavigate}
            style={{
              backgroundColor: "transparent",
              border: "0",
              fontWeight: "bold",
              fontSize: "12px",
            }}
          >
            View all
          </button>
        </span>
      </div>
    </>
  );
};

export default TitleBar;
