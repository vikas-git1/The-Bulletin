import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BBC from "./pages/BBC";
import HindustanTimes from "./pages/HindustanTimes";
import TheHindu from "./pages/TheHindu";
import TimesNow from "./pages/TimesNow";
import TimesOfIndia from "./pages/TimesOfIndia";
import SearchResults from "./pages/SearchResults";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./auth/ProtectedRoute";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route
            path="/bbc"
            element={
              <ProtectedRoute>
                <BBC />
              </ProtectedRoute>
            }
          />
          <Route
            path="/hindustantimes"
            element={
              <ProtectedRoute>
                <HindustanTimes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/thehindu"
            element={
              <ProtectedRoute>
                <TheHindu />
              </ProtectedRoute>
            }
          />
          <Route
            path="/timesnow"
            element={
              <ProtectedRoute>
                <TimesNow />
              </ProtectedRoute>
            }
          />
          <Route
            path="/timesofindia"
            element={
              <ProtectedRoute>
                <TimesOfIndia />
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
