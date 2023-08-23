import React, { useEffect, useState } from "react";
import axios from "axios";

import OneDesCard from "./OneDesCard";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Grid, Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

const OdCarousel = ({ bg_card }) => {
  const [data, setData] = useState([]);
  const [swiperCol, setSwiperCol] = useState(3);
  const [spacing, setSpacing] = useState(50);
  useEffect(() => {
    axios({
      method: "get",
      url: "https://strapi-prod.homznoffiz.com/api/services?pagination[page]=1&pagination[pageSize]=12&populate=*",
    }).then((res) => {
      setData(res.data.data);
    });
  }, []);

  useEffect(() => {
    const hanndleCol = () => {
      if (window.innerWidth > 300 && window.innerWidth < 640) {
        setSwiperCol(2);
        setSpacing(15);
      } else if (window.innerWidth > 765 && window.innerWidth < 825) {
        setSpacing(20);
        setSwiperCol(3);
      } else if (window.innerWidth > 825 && window.innerWidth < 1500) {
        setSwiperCol(3);
        setSpacing(50);
      }
    };
    hanndleCol();
    window.addEventListener("resize", hanndleCol);

    return () => {
      window.removeEventListener("resize", hanndleCol);
    };
  }, [window.innerWidth]);

  const options = {
    slidesPerView: swiperCol,
    grid: {
      rows: 2,
    },
    spaceBetween: spacing,
    navigation: {
      prevEl: ".prevBtn",
      nextEl: ".nextBtn",
    },
    pagination: true,
    modules: [Grid, Pagination, Navigation],
  };

  return (
    <div className="od_cards_container position-relative">
      <div className="prevBtn makeResonsive">
        <BsChevronLeft className="swipBtns" />
      </div>
      <Swiper {...options} className="od_cards_swiper">
        {data.map((value, index) => {
          const { attributes } = value;
          return (
            <SwiperSlide key={index}>
              <OneDesCard
                bg_card={bg_card}
                title={attributes.service_name}
                features={attributes.features.features}
                icon={attributes.icon.data.attributes.url}
                redirectLink={attributes.link}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="nextBtn makeResonsive">
        <BsChevronRight className="swipBtns" />
      </div>
    </div>
  );
};

export default OdCarousel;
