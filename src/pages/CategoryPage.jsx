import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsCard from "../components/NewsCard";
import { fetchNewsByQuery } from "../api/fetchNews";
const CategoryPage = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNewsByQuery(category).then(setNews);
  }, [category]);
  return (
    <div>
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-4">Times of India</h1> */}

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {news.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;
