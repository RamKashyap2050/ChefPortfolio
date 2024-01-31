import "./App.css";
import AboutPage from "./Components/AboutPage";
import Contactme from "./Components/ContactMe";
import CulinaryPortfolio from "./Components/CulinaryPortfolio";
import HomePage from "./Components/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <div className="App">
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<CulinaryPortfolio />} />
          <Route path="/contact" element={<Contactme />} />
        </div>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
