import React from "react";

const TopNewsCard = ({ article }) => {
  if (!article) return null;

  return (
    <div className="w-[90%] h-[30vh] mx-auto my-4 flex flex-col md:flex-row shadow-md rounded-lg overflow-hidden border border-gray-200 bg-white">
      <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
        <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
          {article.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
          {article.description}
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
      <div className="w-full md:w-1/2 h-full">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt="news"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center text-gray-500 text-sm">
            No Image
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNewsCard;
