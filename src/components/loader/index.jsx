import React from "react";
import "./index.css";

function index() {
  return (
    <div
      className=" d-flex justify-content-center align-items-center"
      style={{
        height: "80vh",
      }}
    >
      <div className="snippet" data-title="dot-collision">
        <div className="stage">
          <div className="dot-collision"></div>
        </div>
      </div>
    </div>
  );
}

export default index;
