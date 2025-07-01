import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNewsByQuery } from "../api/fetchNews";
import NewsCard from "../components/NewsCard";

const SearchResults = () => {
  const { query } = useParams();
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (loading) return;
    setLoading(true);
    const newArticles = await fetchNewsByQuery(query, page);
    setNews((prev) => [...prev, ...newArticles]);
    setLoading(false);
  };

  useEffect(() => {
    setNews([]);
    setPage(1);
  }, [query]);

  useEffect(() => {
    loadMore();
  }, [page, query]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 100 &&
        !loading
      ) {
        setPage((prev) => prev + 1);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div>
      {/* <h1 className="text-2xl font-bold text-gray-800 mb-4">Times of India</h1> */}

      <h2>Search: {query}</h2>
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {news.map((article, i) => (
          <NewsCard key={i} article={article} />
        ))}
      </div>

      {loading && <p className="text-center p-4">Loading...</p>}
    </div>
  );
};

export default SearchResults;
