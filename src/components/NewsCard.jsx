import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white shadow-sm rounded-lg overflow-hidden max-w-[20rem] mx-auto my-4 border border-gray-200">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt="thumbnail"
          className="w-full h-50 object-cover"
        />
      )}
      <div className="p-3">
        <h3 className="text-base font-semibold text-gray-800 mb-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3">
          {article.description?.slice(0, 100)}...
        </p>
        <a
          href={article.url}
          target="_blank"
          rel="noreferrer"
          className="text-sm font-medium text-blue-600 hover:underline"
        >
          Read More →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
