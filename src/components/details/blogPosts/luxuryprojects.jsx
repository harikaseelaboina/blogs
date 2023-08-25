import React, { Fragment, useRef, useState } from "react";
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

const Luxurycarousel = (props) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const data = props.data;

  console.log(data);

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
        {data && data.length > 0 && (
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
            {[...Array(5).keys()].map((key) => (
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
                      backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxsiHSwtRWQGR2uzbr568fB2b-bIO0u_X_BdHyPlr6jeCDvGdebfZYm3-Uo-7q34zPcGQ&usqp=CAU)`,
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

                  <div
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
                      M3M Golf Hills
                    </span>
                    <span style={{ padding: "0.5rem", paddingTop: "0" }}>
                      Sector 29,Gurgaon
                    </span>

                    <span
                      style={{
                        padding: "0.5rem",
                        paddingTop: "1rem",
                        fontWeight: "bold",
                      }}
                    >
                      <BsCurrencyRupee /> <span>1.57 Cr to 2.63 Cr</span>
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
                        3, 4 BHK Flats
                      </p>
                      <p style={{ fontSize: "12px", fontWeight: "500" }}>
                        1570-2635 SQ FT
                      </p>
                    </span>
                    <span style={{ display: "flex", justifyContent: "center" }}>
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
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default Luxurycarousel;
