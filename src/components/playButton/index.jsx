import React, { useState } from "react";

import "./index.css";

function index({ onClick }) {
  return (
    <button className="play-btn" onClick={onClick}>
      <span className="play"></span>
    </button>
  );
}

export default index;
