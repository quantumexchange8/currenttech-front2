import './App.css';
import Topbar from './Pages/Topbar';
import Footer from './Pages/Footer';
import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Advantage from "./Pages/Advantage";
import Customize from "./Pages/Customize";
import Products from "./Pages/Products";
import OwnSite from "./Pages/OwnSite";
import Demo from "./Pages/Demo";
import Price from "./Pages/Price";
import Careers from "./Pages/Careers";
import ScrollToTop from './Pages/ScrollToTop';
// import { LanguageProvider } from "./LanguagesContext.js";

function App() {
  return (
    <div>
        <div className="overflow-x-hidden sm:overflow-auto">
          <Topbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="advantage" element={<Advantage />} />
            <Route path="customize" element={<Customize />} />
            <Route path="products" element={<Products />} />
            <Route path="ownsite" element={<OwnSite />} />
            <Route path="demo" element={<Demo />} />
            <Route path="price" element={<Price />} />
            <Route path="careers" element={<Careers />} />
          </Routes>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
