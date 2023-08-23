// import React, { useState } from "react";
// import { BiSolidChevronDown } from "react-icons/bi";
// import "./footer.css";
// import { links } from "./FooterLinks";
// import { NavLink,useNavigate } from "react-router-dom";

// const Footer = () => {

//    const navigate=useNavigate();

//    const handleNavigate = (data) => {
//        navigate(`/headerblogs/${data}`, { state: { data: data } });

//   };
//   return (
//     <div className="blog_footer pb-3">
//       <div className="first">
//         {links[0].map((val, i) => {
//           const { type, innerLink, id } = val;
//           return (
//             <div key={i} id={id} className="firstFotter_container mt-3 mx-3">
//               <h3
//                 className={`text-primary d-flex align-items-center justify-content-between fs-6 fw-bold`}
//               >

//                 {type}
//               </h3>
//               <div className={`innerLink_Container`}>
//                 {innerLink.map((val, i) => {
//                   return (
//                     <a
//                       key={i}
//                       className="text-white"
//                       style={{ fontSize: "13px", paddingBottom: "0.2rem" }}
//                       onClick={()=>handleNavigate(val)}
//                     >
//                       {val}
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="second mt-5  ">
//         {links[1].map((val, i) => {
//           const { type, innerLink, id } = val;
//           return (
//             <div key={i} id={id} className="mt-3 mx-3">
//               <h3
//                 className={`text-primary d-flex align-items-center justify-content-between fs-6 fw-bold`}
//               >
//                 {type}
//               </h3>
//               <div className={`innerLink_Container `}>
//                 {innerLink.map((val, i) => {
//                   return (
//                     // <NavLink
//                     //   key={i}
//                     //   className="text-white"
//                     //   style={{ fontSize: "13px" }}
//                     // >
//                       // {val}
//                     // </NavLink>
//                      <a
//                       key={i}
//                       className="text-white"
//                       style={{ fontSize: "13px", paddingBottom: "0.2rem" }}
//                       onClick={()=>handleNavigate(val)}
//                     >
//                       {val}
//                     </a>
//                   );
//                 })}
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Footer;

import React from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import "./footer.css";
import { links } from "./FooterLinks";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = (data) => {
    navigate(`/headerblogs/${data}`, { state: { data: data } });
  };

  return (
    <div className="blog_footer pb-3 mt-3">
      <div
        className="footer-columns row"
        style={{ display: "flex", marginRight: "", marginLeft: "" }}
      >
        {/* First Column */}
        <div className="column-container col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-6 ">
          {links[0].map((val, i) => {
            const { type, innerLink, id } = val;
            return (
              <div key={i} id={id} className="firstFotter_container mt-3 mx-3">
                <h2 className={`fs-5 fw-bold`}>{type}</h2>
                <div className={`innerLink_Container`}>
                  {innerLink.map((val, i) => (
                    <a
                      key={i}
                      className="text-white"
                      style={{ fontSize: "13px", paddingBottom: "0.2rem" }}
                      onClick={() => handleNavigate(val)}
                    >
                      {val}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Second Column */}
        <div className="column-container col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-6">
          {links[1].map((val, i) => {
            const { type, innerLink, id } = val;
            return (
              <div key={i} id={id} className="mt-3 mx-3">
                <h3 className={`fs-5 fw-bold`}>{type}</h3>
                <div className={`innerLink_Container `}>
                  {innerLink.map((val, i) => (
                    <a
                      key={i}
                      className="text-white"
                      style={{ fontSize: "13px", paddingBottom: "0.2rem" }}
                      onClick={() => handleNavigate(val)}
                    >
                      {val}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="column-container col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-6">
          {links[2].map((val, i) => {
            const { type, innerLink, id } = val;
            return (
              <div key={i} id={id} className="firstFotter_container mt-3 mx-3">
                <h3 className={`fs-5 fw-bold`}>{type}</h3>
                <div className={`innerLink_Container`}>
                  {innerLink.map((val, i) => (
                    <a
                      key={i}
                      className="text-white"
                      style={{ fontSize: "13px", paddingBottom: "0.2rem" }}
                      onClick={() => handleNavigate(val)}
                    >
                      {val}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div className="column-container col-xxl-2 col-xl-3 col-lg-3 col-md-3 col-6">
          {links[3].map((val, i) => {
            const { type, innerLink, id } = val;
            return (
              <div key={i} id={id} className="firstFotter_container mt-3 mx-3">
                <h3 className={`fs-5 fw-bold`}>{type}</h3>
                <div className={`innerLink_Container`}>
                  {innerLink.map((val, i) => (
                    <a
                      key={i}
                      className="text-white"
                      style={{ fontSize: "13px", paddingBottom: "0.2rem" }}
                      onClick={() => handleNavigate(val)}
                    >
                      {val}
                    </a>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Footer;
