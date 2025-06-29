import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsByQuery } from "../api/fetchNews";
const SearchResults = () => {
  const { query } = useParams();
  const [news, setNews] = useState([]);
  useEffect(() => {
    fetchNewsByQuery({ query: query }).then(setNews);
  }, [query]);
  return (
    <div>
      <h2>Search : {query}</h2>
      <div className="flex flex-wrap ">
        {news.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))}
      </div>
    </div>
  );
};

export default SearchResults;
