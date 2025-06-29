import { useState } from "react";
import { FaBars, FaTimes, FaUser, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  console.log(user);

  const newsItems = [
    {
      id: 1,
      newsName: "HindustanTimes",
      path: "/hindustantimes",
    },
    {
      id: 2,
      newsName: "The Hindu",
      path: "/thehindu",
    },
    {
      id: 3,
      newsName: "BBC",
      path: "/bbc",
    },
    {
      id: 4,
      newsName: "Times Now",
      path: "/timesnow",
    },
    {
      id: 5,
      newsName: "Times Of India",
      path: "timesofindia",
    },
  ];
  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer">
          <Link to={"/"}>MyLogo</Link>
        </div>

        {/* Center NavLinks */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          {newsItems.map((item) => {
            return (
              <li key={item.id}>
                <Link to={item.path}>{item.newsName}</Link>
              </li>
            );
          })}
        </ul>

        {/* Right Section */}
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex border rounded-lg overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 outline-none"
            />
            <button className="bg-blue-600 text-white px-3 flex items-center ">
              <FaSearch className="cursor-pointer" />
            </button>
          </div>
          <FaUser className="text-gray-600  w-5 h-5 cursor-pointer" />
          <span className="text-gray-700">Hello, Vikas</span>
        </div>

        {/* Mobile Toggle Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 space-y-3 px-2 pb-3">
          <ul className="space-y-2">
            {newsItems.map((item) => {
              return (
                <li key={item.id}>
                  <Link to={item.path}>{item.newsName}</Link>
                </li>
              );
            })}
          </ul>
          <div className="mt-3">
            <div className="flex border rounded-lg overflow-hidden mb-2">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 w-full outline-none"
              />
              <button className="bg-blue-600 text-white px-3 flex items-center cursor-poiter">
                <FaSearch />
              </button>
            </div>
            <div className="flex items-center space-x-2">
              <FaUser className="w-4 h-4 text-gray-600 cursor-pointer" />
              <span>Hello, Vikas</span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
