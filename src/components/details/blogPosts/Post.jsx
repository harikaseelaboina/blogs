import React from "react";
const Post = ({ imgSrc }) => {
  return (
    <div className="post d-flex align-items-center justify-content-start gap-2">
      <div className="post_img">
        <img src={imgSrc} alt="loading..." />
      </div>
      <div className="">
        <h3 className="title m-0 text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h3>
        <p className="m-0 text-white">In News</p>
        <p className="m-0 text-white">June 13, 2023</p>
      </div>
    </div>
  );
};

export default Post;
