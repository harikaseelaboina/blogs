import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Keyboard } from "swiper";

import BlogCarouselCard from "./BlogCarouselCard";
import "./blogCarousel.css";
import { BlogsContext } from "../../context/CustomContextApi";

import "swiper/css";
import "swiper/css/navigation";
import Cards from "../../blogs/Cards";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const BlogCarousel = ({ sub_category }) => {
  const { homedata } = useContext(BlogsContext);
  // console.log("checking..............");
  // console.log(homedata.data);

  const data =
    homedata && homedata.data
      ? homedata.data.filter(
          (item) => item?.attributes?.sub_category == sub_category
        )
      : [];
  return (
    <>
      {data.length > 0 ? (
        <div className="blogCarousel">
          <div className="blogCarousel_title p-2">
            <h4 className="m-0 fs-5 fw-bold text-uppercase ">
              Related Category
            </h4>
          </div>
          <div className="mt-3">
            <Swiper
              slidesPerView={1}
              spaceBetween={16}
              navigation={true}
              // pagination={true}
              keyboard={true}
              breakpoints={{
                426: {
                  slidesPerView: 2,
                },
                680: {
                  slidesPerView: 3,
                },
              }}
              modules={[Navigation, Pagination, Keyboard]}
              className="blogCarousel_carousel m-0"
            >
              {data.map((item, index) => (
                <SwiperSlide key={index}>
                  <BlogCarouselCard data={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default BlogCarousel;
