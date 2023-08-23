import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import CryptoJS from "crypto-js";
import ReactPlayer from "react-player";
import { findDOMNode } from "react-dom";

function PlayVideo() {
  const params = useParams();

  const [fullscreenMode, setFullscreenMode] = useState(true);
  let player = null;
  const ref = (p) => {
    player = p;
  };

  const onStart = () => {
    if (fullscreenMode)
      findDOMNode(player)
        .requestFullscreen()
        .catch((err) => {
          console.log();("Could not activate full-screen mode :(");
        });
  };

  const decryptVideoLink = () => {
    const data = CryptoJS.AES.decrypt(params["*"], "12345678").toString(
      CryptoJS.enc.Utf8
    );
    return data;
  };  

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        height: "80vh",
        margin: "20px"
      }}
    >
      {/* <video controls autoPlay loop width="320" height="240" ref={videoRef}>
        <source src={decryptVideoLink()} type="video/mp4" />
      </video> */}
      <ReactPlayer
        url={decryptVideoLink()}
        loop
        controls
        playing={true}
        ref={ref}
        onStart={onStart}
      />
    </div>
  );
}

export default PlayVideo;
