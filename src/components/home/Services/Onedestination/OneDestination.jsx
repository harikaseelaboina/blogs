import React from "react";
import "./onedetination.css";
import OdCarousel from "./OdCarousel";

const OneDestination = () => {
  return (
    <section className="oneDestination m-0">
      <div className="od_inner">
        {/* <div className="oneDestination_heading">
          <h2>
            <span className="first">One Destination</span> -
            <span className="secound"> Endless Possibilities</span>
          </h2>
        </div> */}
        <OdCarousel bg_card="#1A2231" />
      </div>
    </section>
  );
};

export default OneDestination;
