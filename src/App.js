import './App.css';
import Topbar from './Pages/Topbar';
import Footer from './Pages/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Advantage from "./Pages/Advantage";
import Products from "./Pages/Products";
import Careers from "./Pages/Careers";
import ScrollToTop from './Pages/ScrollToTop';
import { LanguageProvider } from "./LanguagesContext.js";

function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <div className="overflow-x-hidden sm:overflow-auto">
        <Topbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="advantage" element={<Advantage />} />
          <Route path="products" element={<Products />} />
          <Route path="careers" element={<Careers />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
