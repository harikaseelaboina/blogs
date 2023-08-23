import { React, useContext, useEffect, useState } from "react";
import axios from "axios";
import "./styles/blogpage.css";
import subscribe from "../../assets/blogs/subscribe-mail.gif";
import loader from "../../assets/blogs/Simple elastic loader 1.png";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Services from "./Services/Services";

import HotTopics from "./carousel/HotTopics";
import TrendingNews from "./carousel/TrendingNews";
import FeaturedNews from "./carousel/FeaturedNews";
import MainNews from "./news/MainNews";
import RealEstateNews from "./news/RealEstateNews";
import LandRecords from "./topics/LandRecords";
import FinancialMeasurements from "./topics/FinancialMeasurements";
import AstroVastu from "./topics/AstroVastu";
import Stock from "./topics/Stock";
import CelebrityHomes from "./topics/CelebrityHomes";
import InteriorDecor from "./topics/InteriorDecor";
import AadharCard from "./topics/AadharCard";

import hero1 from "../../assets/blogs/home11.jpg";
import hero2 from "../../assets/blogs/home22.jpg";
import hero3 from "../../assets/blogs/home33.jpg";
import hero4 from "../../assets/blogs/Rectangle.jpg";
import hero5 from "../../assets/blogs/Rectangle13.jpg";
import hero6 from "../../assets/blogs/Rectangle14.jpg";
import hero7 from "../../assets/blogs/Rectangle15.jpg";

// import Header from "../layout/Header";
import Header from "../layout/Header/Header";
import BlogHeader from "./BlogHeader";
import { BlogsContext } from "../context/CustomContextApi";
import { Link } from "react-router-dom";
import Form from "./Form/Form";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Loader from "../loader";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Keyboard, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const heroImages = [hero1, hero2, hero3, hero4, hero5, hero6, hero7];
const changeImage = (index) => {
  const heroImg = (document.getElementById(
    "blog-hero"
  ).style.backgroundImage = `url(${heroImages[index]})`);
  const transition = (document.getElementById("blog-hero").style.transition =
    "background-image ease");
};

const setDefaultImage = () => {
  // Set the default image index (e.g., 0 for the first image in the heroImages array)
  const defaultImageIndex = 0;
  changeImage(defaultImageIndex);
};

const BlogPage = () => {
  const [homedata, setHomeData] = useState([]);

  const { headlinesData } = useContext(BlogsContext);

  // const changeImage = () => {
  //   let index = Math.floor(Math.random() * 3 + 1);
  //   const heroImg = (document.getElementById(
  //     "blog-hero"
  //   ).style.backgroundImage = `url(${heroImages[index - 1]})`);
  //   const transition = (document.getElementById("blog-hero").style.transition =
  //     "background-image ease");
  // };

  // useEffect(() => {
  //   setInterval(changeImage, 4000);
  // }, []);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Set the default image initially
    setDefaultImage();

    // Change the image every 4 seconds (4000ms)
    const interval = setInterval(() => {
      // Generate a random image index (except the current index)
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * heroImages.length);
      } while (randomIndex === currentImageIndex);

      setCurrentImageIndex(randomIndex);
      changeImage(randomIndex);
    }, 2000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const [formData, setFormData] = useState({ email: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // request to the API
    fetch(
      "https://rj7oitjr1l.execute-api.us-east-1.amazonaws.com/dev/write/tech@HomzNOffiz/HomzNOffiz@123/homznoffiz_website_data/subscribeEmail",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authToken:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55IjoiSG9tek5PZmZpeiIsImlhdCI6MTY5MDM2NTQyN30.RtVMBuberUfUT6pO4OkYE-3-eYGuUT3lTtn8MNpJna8",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.json())
      .then((result) => {
        toast.success("Subscribed successfully!");
        // clear form
        setFormData({
          email: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      });
  };

  return (
    <div style={{ margin: "0", width: "100%" }}>
      {homedata ? (
        <div>
          <section className="blogHeader">
            <BlogHeader />
          </section>
          <section
            // className="blogHero rounded-bottom-4"
            className="blogHero"
            id="blog-hero"
            style={
              {
                // height: "22rem",
              }
            }
          >
            <span
              id="title-1"
              style={{
                fontSize: "2.3rem",
                // background: "rgba(0, 0, 0, 0.7)",
                paddingLeft: "1rem",
                paddingRight: "1rem",
                borderTopLeftRadius: "1.5rem",
                borderTopRightRadius: "1.5rem",
              }}
            >
              {/* Your Ultimate guide to successful innovation projects with */}
              Discover Your Home With
            </span>
            <span
              id="title-2"
              style={{
                fontSize: "3rem",
                // background: "rgba(0, 0, 0, 0.7)",
                borderBottomLeftRadius: "1.5rem",
                borderBottomRightRadius: "1.5rem",
              }}
              className="text-primary"
            >
              Homz<span className="text-white">N</span>Offiz{" "}
              <span className="text-white">Blogs</span>
            </span>
          </section>

          <section
            className="mx-lg-5 mx-md-2"
            style={{
              margin: "0 2%",
              // border:"2px red solid"
            }}
          >
            <Header />

            <section
              className="headlines d-flex flex-row overflow-hidden "
              //  style={{marginTop:"1px"}}
            >
              <div
                className="z-3 d-flex position-relative bg-primary  flex-row align-items-center px-1"
                id="headline-title"
                // style={{ width: "10rem" }}
              >
                <img
                  src="https://res.cloudinary.com/dyylqn8vb/image/upload/v1689660410/loading-animation_qydvj9.gif"
                  className="flex-shrink-0 "
                  alt="..."
                  style={{
                    marginLeft: "0",
                    height: "4rem",
                    width: "4rem",
                    marginRight: "0",
                    padding: "0",
                    // border:"2px solid red"
                  }}
                />
                {/* <div> */}
                <span className="mt-0 fw-bold" style={{ fontSize: "1.2rem" }}>
                  Headlines
                </span>
                {/* </div> */}
              </div>

              <div id="headline-articles" className="py-1">
                {headlinesData &&
                  headlinesData.map((item, key) => (
                    <a
                      href={`/details/${item.id}`}
                      className="d-flex position-relative articleDiv rounded-end-4"
                      key={key}
                      style={{ color: "white" }}
                    >
                      <img
                        src={
                          item?.attributes?.blog_info?.image?.data[0]
                            ?.attributes?.url
                        }
                        className="flex-shrink-0 me-3 rounded-end"
                        alt="..."
                        // style={{ width: "40%" }}
                      />
                      <div
                        className="hedtxt d-flex flex-row align-items-center articleText"
                        // style={{ width: "60%" }}
                      >
                        {/* <ReactMarkdown
                    children={item?.attributes?.main_title}
                    remarkPlugins={[remarkGfm]}
                  /> */}
                        {item.attributes.main_title}
                      </div>
                    </a>
                  ))}
              </div>
            </section>

            <section className="mainNews">
              <MainNews />
            </section>

            {/* <section>
              <Swiper
                // spaceBetween={30}
                effect={"fade"}
                spaceBetween={15}
                loop={true}
                navigation={true}
                pagination={false}
                keyboard={true}
                modules={[
                  Navigation,
                  Pagination,
                  Keyboard,
                  Autoplay,
                  EffectFade,
                ]}
                className="mySwiper mainNewsImageSwiper bg-transparent"
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                style={
                  {
                    // margin: "0 100px"
                  }
                }
              >
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-1.jpg"
                    className="mainNewsImage w-100 h-100 object-fit-fill"
                    style={{
                      borderBottomLeftRadius: "25px",
                      borderBottomRightRadius: "25px",
                    }}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                    className="mainNewsImage w-100 h-100 object-fit-fill"
                    style={{
                      borderBottomLeftRadius: "25px",
                      borderBottomRightRadius: "25px",
                    }}
                  />
                </SwiperSlide>
              </Swiper>
            </section> */}

            <section className="featuredNews">
              {/* <FeaturedNews FeaturedNewsData={FeaturedNewsData} /> */}
              <FeaturedNews />
            </section>

            <section className="hotTopics">
              {/* <HotTopics HotTopicsData={HotTopicsData} /> */}
              <HotTopics />
            </section>

            <section className="trendingNews">
              {/* <TrendingNews TrendingNewsData={TrendingNewsData} /> */}
              <TrendingNews />
            </section>

            <section className="realEstateNews">
              {/* <RealEstateNews RealEstateNewsData={RealEstateNewsData} /> */}
              <RealEstateNews />
            </section>

            <section className="landRecords">
              {/* <LandRecords LandRecordsData={LandRecordsData} /> */}
              <LandRecords />
            </section>

            <section className="financialMeasurements">
              {/* <FinancialMeasurements
          FinancialMeasurementsData={FinancialMeasurementsData}
        /> */}
              <FinancialMeasurements bgColor="#BBA592" />
            </section>

            <section className="astrologyVastu">
              {/* <AstroVastu AstroVastuData={AstroVastuData} /> */}
              <AstroVastu />
            </section>

            <section className="stock">
              {/* <Stock StockData={StockData} /> */}
              <Stock bgColor="#BBA592" />
            </section>

            <section className="celebHomes">
              {/* <CelebrityHomes CelebrityHomesData={CelebrityHomesData} /> */}
              <CelebrityHomes />
            </section>

            <section className="interiorDecor">
              {/* <InteriorDecor InteriorDecorData={InteriorDecorData} /> */}
              <InteriorDecor bgColor="#BBA592" />
            </section>

            <section className="aadharCard">
              {/* <AadharCard GovtIdentityData={GovtIdentityData} /> */}
              <AadharCard />
            </section>

            <section className="onestop" style={{ borderRadius: "12px" }}>
              <Services />
            </section>

            <section
              className="blogSubscribe"
              style={{
                marginTop: "1.5rem",
                // height: "24rem",
                // border: "2px red solid",
              }}
            >
              <div className="row d-flex flex-lg-row flex-md-row">
                <div
                  className="d-none d-md-block col-lg-6 col-md-6 d-flex flex-row justify-content-center align-items-center"
                  id="subscribe-img"
                  style={{ overflow: "hidden" }}
                >
                  <img src={subscribe} alt="..." />
                </div>
                <div
                  className="col-lg-6 col-md-6 d-flex flex-column justify-content-center"
                  id="subscribe-text"
                >
                  <form id="mail-box" onSubmit={handleSubmit}>
                    <div
                      className="w-75 mb-3"
                      id="form-heading"
                      style={{ fontSize: "1.5rem" }}
                    >
                      Your most interesting inbox{" "}
                      <span style={{ color: "#C88F63" }}>awaits you.</span>
                    </div>
                    <div id="subscribe-input" className="my-3">
                      <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        id="email"
                        className="my-2"
                      />
                    </div>
                    <div id="subscribe-btn" className="my-2 d-flex ">
                      <button
                        type="submit"
                        style={{
                          fontSize: "1rem",
                          fontWeight: "bold",
                          padding: "8px",
                        }}
                      >
                        Subscribe
                      </button>
                    </div>
                    <div
                      id="consent-note"
                      className="my-1"
                      style={{ fontSize: "1rem" }}
                    >
                      By provinding your contact information, you consent to
                      HomzNOffiz sending you monthly emails. You can unsubscribe
                      at any time.
                    </div>
                  </form>
                </div>
              </div>
              {/* <Form/> */}
            </section>
          </section>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BlogPage;
