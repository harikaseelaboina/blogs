import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Keyboard } from "swiper";

import { useNavigate } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import TitleBar from "../TitleBar";
import { BlogsContext } from "../../context/CustomContextApi";

const HotTopics = () => {
  // const HotTopicsData = props.HotTopicsData;
  const { HotTopicsData } = useContext(BlogsContext);

  const images_data = [
    {
      name: "Buyer's Guide",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688802471/buyers_mnwnwn.jpg",
    },
    {
      name: "International",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688802223/nat_hbvcic.jpg",
    },
    {
      name: "Property Insights",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688802324/propppe_czex7b.jpg",
    },
    {
      name: "Celebrity Homes",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688799666/cele_p6h8vb.png",
    },
    {
      name: "Media Coverage",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688801081/media_wifkuu.jpg",
    },
    {
      name: "Cities",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688801080/cities_sf0sft.png",
    },
    {
      name: "LifeStyle",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688801081/lifestyle_mbakqh.jpg",
    },
    {
      name: "Legal & Taxes",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688801080/legal_and_tax_s38fws.png",
    },
    {
      name: "Real Estate Information",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688801080/reales_oz7lea.webp",
    },
    {
      name: "Calculators",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688801080/calac_miechh.avif",
    },
    {
      name: "Vastu",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688801080/stu_vujeba.jpg",
    },
    {
      name: "News",
      img: "https://res.cloudinary.com/dyylqn8vb/image/upload/v1688801079/news_c3oedn.jpg",
    },
  ];

  function getDistinctHotTopics(data) {
    const hotTopics = {};

    // Iterate over each blog
    data.forEach((blog) => {
      const hotTopicType = blog?.attributes?.hot_topic_type;

      // If hot_topic_type is present, increment the count for that hot topic type
      if (hotTopicType) {
        if (hotTopics[hotTopicType]) {
          hotTopics[hotTopicType].no++;
        } else {
          hotTopics[hotTopicType] = { name: hotTopicType, no: 1 };
        }
      }
    });

    return Object.values(hotTopics);
  }

  // Call the function and get the result
  const distinctHotTopics = getDistinctHotTopics(HotTopicsData);

  const cardStyle = {
    height: "100%",
    maxWidth: "inherit",
  };
  const slideStyle = (name) => {
    const imageData = images_data.find((image) => image.name === name);
    return {
      backgroundImage: `url('${imageData?.img}')`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "cover",
      minHeight: "100%",
      height: "12rem",
     
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-end",
      padding: "1rem 0",
      borderRadius: "15px",
    };
  };

  const navigate = useNavigate();

  const handleNavigate = (name) => {
    const filteredData = HotTopicsData.filter(
      (blog) => blog?.attributes?.hot_topic_type === name
    );
    navigate(`/blogs/${name}`, { state: { data: filteredData, title: name } });
  };
  return (
    <>
      <TitleBar title="Hot Topics" link="/blogs" data={HotTopicsData} />
      <Swiper
        breakpoints={{
          992: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          380: {
            slidesPerView: 1,
          },
        }}
        spaceBetween={20}
        navigation={true}
        pagination={false}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        className="mySwiper my-3 bg-transparent"
      >
        {distinctHotTopics.map((item, index) => (
          <SwiperSlide style={slideStyle(item.name)} key={index}>
            <div className="cardBody" onClick={() => handleNavigate(item.name)}>
              <span className="text-1">{item.name}</span>
              <span className="text-2">{item.no}+ Articles</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default HotTopics;
