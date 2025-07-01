import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import ProtectedRoute from "./auth/ProtectedRoute";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import Category from "./components/Category";
import CategoryPage from "./pages/CategoryPage";
import TopNews from "./components/TopNews";
import SourceNews from "./pages/SourceNews";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Category />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <TopNews /> <Home />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route
            path="/category/:category"
            element={
              <ProtectedRoute>
                <CategoryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/source/:source"
            element={
              <ProtectedRoute>
                <SourceNews />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
