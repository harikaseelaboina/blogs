import React, { useEffect, useState } from "react";
import hnzLogo from "../../assets/blogs/blog header/af87f3d9-8317-474b-8bd6-bbee87854ffa 1.png";
import user from "../../assets/blogs/blog header/🦆 icon _user circle alt_.svg";
import facebook from "../../assets/blogs/blog header/facebook hover.svg";
import instagram from "../../assets/blogs/blog header/instagram hover.svg";
import linkedIn from "../../assets/blogs/blog header/LINKDIN HOVER.svg";
import twitter from "../../assets/blogs/blog header/twitter hover.svg";
import "./blogHeader.css";
import {
  MdOutlineKeyboardArrowUp,
  MdOutlineKeyboardArrowDown,
  MdOutlineClose,
} from "react-icons/md";
import axios from "axios";
import { mainWebsite } from "../../config";
import { Collapse, Fade } from "react-bootstrap";

let navLinks = [
  {
    title: "Solutions",
    subLinks: [],
  },

  {
    title: "Resources",
    subLinks: [
      {
        link: "Tools",
        to: `/coming-soon`,

        url: "https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/95ab9d3dd7ac388e4caa8e6a836ac5_unscreen_3592b51fef.gif",
      },
      {
        link: "Solutions",
        to: `/coming-soon`,
        url: "https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/Cy_Xk9_ar_8d970e0fe4.gif",
      },
      {
        link: "Blogs & News",
        to: `/coming-soon`,
        url: "https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/0452b29aa0045bfb4d80417e86978b_unscreen_c3defd8e8f.gif",
      },
      {
        link: "Pincode",
        to: `/coming-soon`,
        url: "https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/wired_gradient_18_location_pin_1_d537432334.gif",
      },
      {
        link: "Guides",
        to: `/coming-soon`,
        url: "https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/XQ_Tg_O5gt_2b257120c4.gif",
      },
      {
        link: "Real Estate Q&A Forum",
        to: `/coming-soon`,
        url: "https://homznoffiz-tech.s3.ap-south-1.amazonaws.com/q_and_a_forum_edd774cfc8.gif",
      },
    ],
  },
  // {
  //   title: "Glossary",
  //   subLinks: [
  //     {
  //       link: "option1",
  //       to: "/",
  //     },
  //     {
  //       link: "option2",
  //       to: "/",
  //     },
  //     {
  //       link: "option3",
  //       to: "/",
  //     },

  //   ],
  // },
];

const social = [
  {
    name: "Instagram",
    icon: "https://img.icons8.com/?size=512&id=Xy10Jcu1L2Su&format=png",
    link: "https://www.instagram.com/homznoffiz/",
  },
  {
    name: "LinekdIn",
    icon: "https://img.icons8.com/?size=512&id=xuvGCOXi8Wyg&format=png",
    link: "https://www.linkedin.com/company/homznoffiz/",
  },
  {
    name: "Facebook",
    icon: "https://img.icons8.com/?size=512&id=uLWV5A9vXIPu&format=png",
    link: "https://www.facebook.com/homznoffiz/",
  },
  {
    name: "Twitter",
    icon: "https://img.icons8.com/?size=512&id=5MQ0gPAYYx7a&format=png",
    link: "#",
  },
  {
    name: "Threads",
    icon: "https://seeklogo.com/images/T/threads-by-instagram-logo-20008C5295-seeklogo.com.png?v=638243447960000000",
    link: "#",
  },
];

const BlogHeader = () => {
  const [date, setDate] = useState("");

  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    setTimeout(() => {
      setDate(new Date().toString().slice(0, 24));
    }, 1000);
  }, [date]);

  const navStyles = {
    links: {
      fontSize: "2.5vh",
    },
    iconStyle: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      rowGap: "0.8vh",
      columnGap: "0.8vh",
      cursor: "pointer",
    },
  };

  const [open, setOpen] = useState(null);
  const handleShow = (i) => {
    setOpen((prevIndex) => (prevIndex === i ? null : i));
  };

  useEffect(() => {
    axios
      .get(
        "https://strapi-prod.homznoffiz.com/api/services?sort=dropdown&pagination[page]=1&pagination[pageSize]=13&populate=*"
      )
      .then((response) => {
        const items = response.data.data;
        const markers = [];
        // Iterate over each item
        items.forEach((item) => {
          const name = item.attributes.service_name;
          const link = item.attributes.link;
          const url = item.attributes.icon.data.attributes.url;
          // Create a marker object for each item
          const marker = {
            link: name,
            to: link,
            url: url,
          };
          // Add the marker to the markers array
          markers.push(marker);
        });
        navLinks[0].subLinks = markers;
      });
  }, []);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg mx-auto"
        style={{
          // backgroundColor: "#1A2333",
          backgroundColor: "white",
          // borderTopLeftRadius: "25px",
          zIndex: "9",
        }}
      >
        <div className="container-fluid">
          <a className="logo navbar-brand" href="#">
            <img src={hnzLogo} alt="..." />
          </a>
          {/* <span className="datesz fw-bold text-black" >
            {date}
          </span> */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              document
                .querySelector(".mobile_NavBar")
                .classList.toggle("d-none");
              document.querySelector("body").style.overflowY = "hidden";
            }}
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto w-75 d-lg-flex flex-lg-row justify-content-lg-around">
              <li className="nav-item position-relative">
                <a
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  href={`/`}
                  style={navStyles.links}
                >
                  <span style={{ fontSize: "1rem", color: "black" }}>Home</span>
                </a>
              </li>
              {navLinks.map((val, i) => {
                const { title, subLinks } = val;
                return (
                  <li
                    key={i}
                    className="nav-item position-relative"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <div
                      className="nav-link text-black fw-bold"
                      aria-current="page"
                      style={navStyles.links}
                      onClick={() => handleShow(i)}
                    >
                      <span style={{ fontSize: "1rem" }}>
                        {title}
                        {open === i ? (
                          <MdOutlineKeyboardArrowUp className="arrowIcon" />
                        ) : (
                          <MdOutlineKeyboardArrowDown className="arrowIcon" />
                        )}{" "}
                      </span>
                    </div>
                    <div
                      className={`SubLinks_Box position-absolute p-3 rounded-1  ${
                        open === i ? "d-block" : "d-none"
                      }`}
                    >
                      {subLinks.map((value, i) => (
                        <a
                          style={{
                            display: "block",
                            letterSpacing: "0",
                          }}
                          className="text-white mb-1 d-flex "
                          href={mainWebsite + value.to}
                          target="_blank"
                          key={i}
                        >
                          <img
                            style={{
                              width: "30px",
                            }}
                            className=" me-2 "
                            src={value.url}
                          />
                          <div>{value.link}</div>
                        </a>
                      ))}
                    </div>
                  </li>
                );
              })}
              <li className="nav-item position-relative">
                <a
                  className="nav-link text-white fw-bold"
                  aria-current="page"
                  href={`${mainWebsite}/coming-soon`}
                  target="_blank"
                  style={navStyles.links}
                >
                  <span style={{ fontSize: "1rem", color: "black" }}>
                    {" "}
                    Glossary
                  </span>
                </a>
              </li>
            </ul>
            <div className="mx-5">
              <a href="#">
                <img src={user} alt="..." />
              </a>
            </div>
            <div
              className=" p-1"
              style={{ backgroundColor: "#0E1420", borderRadius: "10px" }}
            >
              <div onClick={handleToggle}>
                <div style={navStyles.iconStyle}>
                  <img
                    src={facebook}
                    alt="..."
                    style={{ width: "11px", height: "11px" }}
                  />
                  <img src={instagram} alt="..." />
                  <img src={linkedIn} alt="..." />
                  <img src={twitter} alt="..." />
                </div>
              </div>
              {show && (
                <div className=" position-absolute d-flex flex-column mt-2">
                  {social.map((item, key) => (
                    <a href={item.link} key={key} target="_blank">
                      <img
                        height={30}
                        width={30}
                        className="my-1"
                        src={item.icon}
                      />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* <div className="mx-5">
          <a href="#">
            <img src={user} alt="..." />
          </a>
        </div>
        <div
          className=" p-1"
          style={{ backgroundColor: "#0E1420", borderRadius: "10px" }}
        >
          <a href="#">
            <div style={navStyles.iconStyle}>
              <img
                src={facebook}
                alt="..."
                style={{ width: "11px", height: "11px" }}
              />
              <img src={instagram} alt="..." />
              <img src={linkedIn} alt="..." />
              <img src={twitter} alt="..." />
            </div>
          </a>
        </div> */}
        </div>
      </nav>
      <div className="mobile_NavBar d-none">
        <div className="inner_mobile_nav">
          <MdOutlineClose
            className="closeBtn"
            onClick={() => {
              document
                .querySelector(".mobile_NavBar")
                .classList.toggle("d-none");
              document.querySelector("body").style.overflowY = "";
            }}
          />
          <ul className="navbar-nav">
            <li className="nav-item position-relative">
              <a
                className="nav-link text-white fw-bold"
                aria-current="page"
                href={`/`}
                style={navStyles.links}
              >
                <span style={{ fontSize: "1rem" }}>Home</span>
              </a>
            </li>
            {navLinks.map((val, i) => {
              const { title, subLinks } = val;
              return (
                <li className="nav-item position-relative" key={i}>
                  <a
                    className="nav-link text-white fw-bold"
                    aria-current="page"
                    href="#"
                    style={navStyles.links}
                    onClick={() => handleShow(i)}
                  >
                    <span style={{ fontSize: "1rem" }}>{title}</span>
                  </a>
                  <div
                    className={`SubLinks_Box position-absolute p-3 rounded-1  ${
                      open === i ? "d-block" : "d-none"
                    }`}
                  >
                    {subLinks.map((value, i) => (
                      <a
                        style={{
                          display: "block",
                          letterSpacing: "0",
                        }}
                        className="text-white mb-1"
                        href="#"
                        key={i}
                      >
                        {value.link}
                      </a>
                    ))}
                  </div>
                </li>
              );
            })}
            <li className="nav-item position-relative">
              <a
                className="nav-link text-white fw-bold"
                aria-current="page"
                href={`${mainWebsite}/coming-soon`}
                target="_blank"
                style={navStyles.links}
              >
                <span style={{ fontSize: "1rem" }}>Glossary</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogHeader;
