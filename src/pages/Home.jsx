import React, { useEffect, useState } from "react";
import { fetchNewsBySource } from "../api/fetchNews";
import NewsCard from "../components/NewsCard";
const Home = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchNewsBySource({ source: "bbc-news" }).then(setNews);
  }, []);
  console.log("News fetched ****", news);

  return (
    <div>
      <h1>Home/ Times of India</h1>
      <div className="flex flex-wrap ">
        {news.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Home;
