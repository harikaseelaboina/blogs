import React, { Fragment, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Modal } from "react-bootstrap";
// import { Pagination, Navigation, Keyboard, Autoplay } from "swiper";
import SwiperCore, { Pagination, Navigation, Keyboard, Autoplay } from "swiper";

// import { Autoplay, Pagination, Navigation } from "swiper/modules";
import heart from "../../../assets/blogs/heart.png";
import share from "../../../assets/blogs/share.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import building from "../../../assets/blogs/headline-1.png";

import clock from "../../../assets/blogs/Clock.png";
import book from "../../../assets/blogs/book.png";

import PlayButton from "../../playButton";

import { BiSolidShareAlt } from "react-icons/bi";
import { BsCurrencyRupee } from "react-icons/bs";

import { useNavigate } from "react-router-dom";

import CryptoJS from "crypto-js";
// import "./styles.css";
import { MdHeight } from "react-icons/md";
import Form from "../../home/Form/Form";
import { mainWebsite } from "../../../config";
import axios from "axios";

const Luxurycarousel = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [projects, setProjects] = useState([]);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const data = props.data;

  // console.log(data);

  const progressCircleRef = useRef(null);
  const progressContentRef = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircleRef.current && progressContentRef.current) {
      progressCircleRef.current.style.setProperty("--progress", 1 - progress);
      progressContentRef.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const cardStyle = {
    // width: "100%",
    // margin: "0 auto",
    border: "none",
    // background: "linear-gradient(rgba(0, 0, 0, 0.237),rgba(0,0,0,0.237))",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    borderBottomRightRadius: "2rem",
    borderBottomLeftRadius: "2rem",

    // minHeight: "100%",
    // height: "52.3vh",
  };

  const navigate = useNavigate();

  const encryptVideoLink = (link) => {
    const data = CryptoJS.AES.encrypt(link, "12345678").toString();
    console.log(data);
    navigate(`/playVideo/${data}`);
    // window.open(`${data}`, "_blank");
  };

  var url = `https://strapi-prod.homznoffiz.com/api/assets?filters[community][city][state][country][country_name][$eqi]=india&filters[Exclusive_property][$eq]=true&filters[property_type][$ne]=Commercial&sort[0]=rating%3Adesc&populate[0]=*&populate[1]=community.city.city_name&populate[2]=bhk.type&populate[3]=asset_images&pagination[page]=1&pagination[pageSize]=10`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        // console.log("res", res?.data?.data);
        setProjects(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, [projects]);

  return (
    <div
      style={{
        borderRadius: "24px",
        backgroundColor: " #BBA592",
        padding: "2px",
        width: "100%",
      }}
    >
      <div
        className="luxcar"
        style={{
          width: "90%",
          margin: "auto",

          // border:"2px red solid",
          marginTop: "0",
        }}
      >
        {projects && projects.length > 0 && (
          <Swiper
            // slidesPerView={1}
            // spaceBetween={15}
            loop={true}
            // loopedSlides="auto"
            navigation={true}
            pagination={false}
            keyboard={true}
            modules={[Navigation, Pagination, Keyboard, Autoplay]}
            className="mySwiper my-3 bg-transparent"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              400: {
                slidesPerView: 1,
              },
              620: {
                slidesPerView: 1,
              },
              850: {
                slidesPerView: 1,
              },
              1000: {
                slidesPerView: 1,
              },
              1200: {
                slidesPerView: 1,
              },
              1500: {
                slidesPerView: 1,
              },
            }}
            // onAutoplayTimeLeft={onAutoplayTimeLeft}
          >
            {projects.map((value, key) => {
              const location =
                value.attributes.community.data.attributes.community_name;
              const slug_name = value.attributes.asset_slug_name;
              const city =
                value.attributes.community.data.attributes.city.data.attributes
                  .city_name;
              const propertyName = value.attributes.asset_name;
              const propertyType = value.attributes.property_type;
              var Price = value.attributes.asset_starting_price;
              var unit1 = "Cr";
              if (Price < 1) {
                Price = Price * 100;
                unit1 = "Lac";
              }
              var Maximum = value.attributes.asset_maximum_price;
              var unit2 = "Cr";
              if (Maximum < 1) {
                Maximum = Maximum * 100;
                unit2 = "Lac";
              }
              const Saleable = value.attributes.flat_area_starting_range;
              const Saleable2 = value.attributes.flat_area_ending_range;
              const thumbnail =
                value.attributes.asset_images.data[0].attributes.url;
              let flatType = "";
              value.attributes.bhk?.data.map((val, index) => {
                flatType += `${val.attributes.bhk_type}`;
                if (index !== value.attributes.bhk?.data.length - 1) {
                  flatType += ", ";
                }
                return flatType;
              });

              if (flatType !== "") {
                flatType += " Bhk ";
              }
              return (
                <SwiperSlide key={key}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div
                      style={{
                        position: "relative",
                        backgroundImage: `url(${thumbnail})`,
                        height: "15rem",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        borderTopLeftRadius: "10px",
                        borderTopRightRadius: "10px",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          top: 5,
                          backgroundColor: "rgb(255, 255, 255,0.2)",
                          padding: "0.2rem",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-end",
                          alignItems: "end",
                          right: 5,
                          cursor: "pointer",
                        }}
                        onClick={() => {
                          copyUrlToClipboard();
                        }}
                      >
                        <BiSolidShareAlt color="white" size={20} />
                      </div>
                      <div
                        style={{
                          position: "absolute",
                          top: "5%",
                          padding: "0.2rem",
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "flex-start",
                          alignItems: "start",
                        }}
                      >
                        <button
                          style={{
                            backgroundColor: "rgb(255, 255, 255,0.5)",
                            border: "2px black solid",
                            borderRadius: "20px",
                            paddingLeft: "0.5rem",
                            fontSize: "12px",
                            paddingRight: "0.5rem",
                          }}
                        >
                          Luxury Projects
                        </button>
                      </div>
                    </div>

                    <a
                      href={`${mainWebsite}/property/${slug_name}`}
                      style={{
                        display: "flex",
                        color: "white",
                        flexDirection: "column",
                        backgroundColor: "black",
                        borderBottomLeftRadius: "10px",
                        borderBottomRightRadius: "10px",
                        padding: "0.5rem",
                      }}
                    >
                      <span
                        style={{
                          padding: "0.5rem",
                          paddingBottom: "0",
                          fontWeight: "bold",
                        }}
                      >
                        {propertyName.length > 25
                          ? propertyName.slice(0, 25) + "..."
                          : propertyName}
                      </span>
                      <span style={{ padding: "0.5rem", paddingTop: "0" }}>
                        {location}, {city}
                      </span>

                      <span
                        style={{
                          padding: "0.5rem",
                          paddingTop: "1rem",
                          fontWeight: "bold",
                        }}
                      >
                        <BsCurrencyRupee />{" "}
                        <span>
                          {Price} {unit1} to {Maximum} {unit2}
                        </span>
                      </span>
                      <span
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          paddingTop: "0",
                        }}
                      >
                        <p
                          style={{
                            paddingLeft: "0.5rem",
                            fontSize: "12px",
                            fontWeight: "500",
                            margin: "0",
                          }}
                        >
                          {flatType} {propertyType}
                        </p>
                        <p style={{ fontSize: "12px", fontWeight: "500" }}>
                          {Saleable} - {Saleable2} SQ. FT.
                        </p>
                      </span>
                      <span
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <button
                          onClick={handleShowModal}
                          style={{
                            backgroundColor: "black",
                            color: "white",
                            borderRadius: "30px",
                            border: "2px solid green",
                            // width: "60%",
                            padding: "5px 10px",
                          }}
                        >
                          Request Call Back
                        </button>
                        <Modal show={showModal} onHide={handleCloseModal}>
                          <Form close="true" />
                        </Modal>
                      </span>
                    </a>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Luxurycarousel;
