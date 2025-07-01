import { useContext, useState } from "react";
import { FaBars, FaTimes, FaUser, FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext, useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();
  const { userProfile } = useContext(AuthContext);

  const newsItems = [
    { id: 1, newsName: "Fox News", path: "fox-news" },
    { id: 2, newsName: "The Hindu", path: "the-hindu" },
    { id: 3, newsName: "BBC", path: "bbc-news" },
    { id: 4, newsName: "The Verge", path: "the-verge" },
    { id: 5, newsName: "Times Of India", path: "the-times-of-india" },
  ];

  const handleSearch = () => {
    navigate(`/search/${query}`);
    setQuery("");
  };

  const handleLogin = () => navigate("/login");
  const handleUserProfile = () => navigate("/profile");

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-700">
          NewsNow
        </Link>

        <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
          {newsItems.map((item) => (
            <li
              key={item.id}
              onClick={() => navigate(`/source/${item.path}`)}
              className="cursor-pointer hover:text-blue-600"
            >
              {item.newsName}
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <div className="flex border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 outline-none"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-3"
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>
          {user ? (
            <div
              onClick={handleUserProfile}
              className="flex items-center cursor-pointer gap-2"
            >
              <FaUser className="text-gray-600" />
              <span className="text-sm font-medium">
                Hello, {userProfile.firstName}
              </span>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="text-sm px-3 py-1 rounded-md bg-blue-600 text-white"
            >
              Login
            </button>
          )}
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-4">
          <ul className="flex flex-col gap-2">
            {newsItems.map((item) => (
              <li
                key={item.id}
                onClick={() => {
                  navigate(`/source/${item.path}`);
                  setIsOpen(false);
                }}
                className="text-gray-700 font-medium cursor-pointer hover:text-blue-600"
              >
                {item.newsName}
              </li>
            ))}
          </ul>
          <div className="flex border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-3 py-1 outline-none"
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              className="bg-blue-600 text-white px-3"
              onClick={handleSearch}
            >
              <FaSearch />
            </button>
          </div>
          {user ? (
            <div
              onClick={handleUserProfile}
              className="flex items-center gap-2 cursor-pointer"
            >
              <FaUser className="text-gray-600" />
              <span>Hello, {userProfile.firstName}</span>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="text-sm px-3 py-1 rounded-md bg-blue-600 text-white"
            >
              Login
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
