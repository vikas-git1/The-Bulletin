import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { fetchNewsBySource } from "../api/fetchNews";
import TopNewsCard from "./TopNewsCard";
const TopNews = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    // fetchTopNewsInIndia().then(setNews);
    fetchNewsBySource("bbc-news").then(setNews);
  }, []);
  console.log("Top news **********************", news);

  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
      style={{ height: "300px", width: "100%" }}
    >
      {news.map((article, i) => (
        <SwiperSlide key={i}>
          <TopNewsCard article={article} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopNews;
