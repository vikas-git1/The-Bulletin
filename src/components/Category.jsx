import React from "react";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const navigate = useNavigate();
  const categories = ["Politics", "Sports", "India", "Business", "War"];

  return (
    <div className="w-full flex justify-center py-4 bg-gray-100 flex-wrap gap-3">
      {categories.map((item, i) => (
        <button
          key={i}
          onClick={() => navigate(`/category/${item.toLowerCase()}`)}
          className="px-4 py-2 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600"
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default Category;
