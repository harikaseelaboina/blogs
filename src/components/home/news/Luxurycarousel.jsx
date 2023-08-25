import React, { useEffect, useState } from "react";
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
import "./styles.css";
import Form from "../Form/Form";

import { BsCurrencyRupee } from "react-icons/bs";
import { BiSolidShareAlt } from "react-icons/bi";
import { toast } from "react-toastify";
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

  const copyUrlToClipboard = () => {
    const currentUrl = window.location;
    // navigator.clipboard.writeText(currentUrl);
    navigator.clipboard.writeText(`${mainWebsite}/property`);
    toast.success("Copied");
  };

  var url = `https://strapi-prod.homznoffiz.com/api/assets?filters[community][city][state][country][country_name][$eqi]=india&filters[Exclusive_property][$eq]=true&filters[property_type][$ne]=Commercial&sort[0]=rating%3Adesc&populate[0]=*&populate[1]=community.city.city_name&populate[2]=bhk.type&populate[3]=asset_images&pagination[page]=1&pagination[pageSize]=10`;

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        console.log("res", res?.data?.data);
        setProjects(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });

    return () => {};
  }, [props]);

  console.log("data", data);

  return (
    <div
      className="luxcar"
      style={{
        width: "100%",
        margin: "auto",

        // border:"2px red solid",
        marginTop: "0",
      }}
    >
      {data && data.length > 0 && (
        <Swiper
          // slidesPerView={1}
          spaceBetween={15}
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
              slidesPerView: 2,
            },
            850: {
              slidesPerView: 3,
            },
            1000: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
            1500: {
              slidesPerView: 4,
            },
          }}
        >
          {projects.map((value, index) => {
            const location =
              value.attributes.community.data.attributes.community_name;
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
              <SwiperSlide key={index}>
                <div
                  style={{
                    // height: "luxcar",
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
                  </div>

                  <a
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      background: "rgb(187, 165, 146)",
                      borderBottomLeftRadius: "10px",
                      borderBottomRightRadius: "10px",
                      padding: "0.5rem",
                      border: "1px solid lightgray",
                      color: "black",
                    }}
                    href={`${mainWebsite}/property`}
                  >
                    <span
                      style={{
                        padding: "0.5rem",
                        paddingBottom: "0",
                        fontWeight: "bold",
                      }}
                    >
                      {propertyName.length > 25
                        ? propertyName.slice(0, 25)+"..."
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
                    <span style={{ display: "flex", justifyContent: "center" }}>
                      <button
                        onClick={handleShowModal}
                        style={{
                          borderRadius: "30px",
                          border: "2px solid white",
                          width: "60%",
                          background: "transparent",
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
          {/* <SwiperSlide>
            <div
              style={{
                height: "luxcar",
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
                    top: "5%",
                    backgroundColor: "rgb(255, 255, 255,0.2)",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "end",
                    marginLeft: "90%",
                  }}
                >
                  <img
                    src={heart}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.2rem",
                    }}
                  />
                  <img
                    src={share}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.3rem",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#C88F63",
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
                  ₹ 1.57 Cr to 2.63 Cr
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
                      borderRadius: "30px",
                      border: "2px solid green",
                      width: "60%",
                    }}
                  >
                    Request Call Back
                  </button>
                  <Modal
                    show={showModal}
                    onHide={handleCloseModal}
                    style={{ backgroundColor: "transparent" }}
                  >
                    <Form close="true" />
                  </Modal>
                </span>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              style={{
                height: "luxcar",
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
                    top: "5%",
                    backgroundColor: "rgb(255, 255, 255,0.2)",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "end",
                    marginLeft: "90%",
                  }}
                >
                  <img
                    src={heart}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.2rem",
                    }}
                  />
                  <img
                    src={share}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.3rem",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#C88F63",
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
                  ₹ 1.57 Cr to 2.63 Cr
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
                      borderRadius: "30px",
                      border: "2px solid green",
                      width: "60%",
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
          <SwiperSlide>
            <div
              style={{
                height: "luxcar",
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
                    top: "5%",
                    backgroundColor: "rgb(255, 255, 255,0.2)",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "end",
                    marginLeft: "90%",
                  }}
                >
                  <img
                    src={heart}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.2rem",
                    }}
                  />
                  <img
                    src={share}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.3rem",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#C88F63",
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
                  ₹ 1.57 Cr to 2.63 Cr
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
                      borderRadius: "30px",
                      border: "2px solid green",
                      width: "60%",
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
          <SwiperSlide>
            <div
              style={{
                height: "luxcar",
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
                    top: "5%",
                    backgroundColor: "rgb(255, 255, 255,0.2)",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "end",
                    marginLeft: "90%",
                  }}
                >
                  <img
                    src={heart}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.2rem",
                    }}
                  />
                  <img
                    src={share}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.3rem",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#C88F63",
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
                  ₹ 1.57 Cr to 2.63 Cr
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
                      borderRadius: "30px",
                      border: "2px solid green",
                      width: "60%",
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
          <SwiperSlide>
            <div
              style={{
                height: "luxcar",
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
                    top: "5%",
                    backgroundColor: "rgb(255, 255, 255,0.2)",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "end",
                    marginLeft: "90%",
                  }}
                >
                  <img
                    src={heart}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.2rem",
                    }}
                  />
                  <img
                    src={share}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.3rem",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#C88F63",
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
                  ₹ 1.57 Cr to 2.63 Cr
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
                      borderRadius: "30px",
                      border: "2px solid green",
                      width: "60%",
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
          <SwiperSlide>
            <div
              style={{
                height: "luxcar",
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
                    top: "5%",
                    backgroundColor: "rgb(255, 255, 255,0.2)",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "end",
                    marginLeft: "90%",
                  }}
                >
                  <img
                    src={heart}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.2rem",
                    }}
                  />
                  <img
                    src={share}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.3rem",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#C88F63",
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
                  ₹ 1.57 Cr to 2.63 Cr
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
                      borderRadius: "30px",
                      border: "2px solid green",
                      width: "60%",
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
          <SwiperSlide>
            <div
              style={{
                height: "luxcar",
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
                    top: "5%",
                    backgroundColor: "rgb(255, 255, 255,0.2)",
                    padding: "0.2rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "end",
                    marginLeft: "90%",
                  }}
                >
                  <img
                    src={heart}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.2rem",
                    }}
                  />
                  <img
                    src={share}
                    alt="hj"
                    style={{
                      cursor: "pointer",
                      width: "1.5rem",
                      padding: "0.3rem",
                    }}
                  />
                </div>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  backgroundColor: "#C88F63",
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
                  ₹ 1.57 Cr to 2.63 Cr
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
                      borderRadius: "30px",
                      border: "2px solid green",
                      width: "60%",
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
          </SwiperSlide> */}
        </Swiper>
      )}
    </div>
  );
};

export default Luxurycarousel;
