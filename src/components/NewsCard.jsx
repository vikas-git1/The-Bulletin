import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden w-full max-w-xs mx-auto my-4 border">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="thumbnail"
          className="w-full h-48 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {article.description?.slice(0, 100)}...
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 text-sm hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
