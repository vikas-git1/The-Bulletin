import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BBC from "./pages/BBC";
import HindustanTimes from "./pages/HindustanTimes";
import TheHindu from "./pages/TheHindu";
import TimesNow from "./pages/TimesNow";
import TimesOfIndia from "./pages/TimesOfIndia";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bbc" element={<BBC />} />
          <Route path="/hindustantimes" element={<HindustanTimes />} />
          <Route path="/thehindu" element={<TheHindu />} />
          <Route path="/timesnow" element={<TimesNow />} />
          <Route path="/timesofindia" element={<TimesOfIndia />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
