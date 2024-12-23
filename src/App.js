import './App.css';
import Topbar from './Pages/Topbar';
import Footer from './Pages/Footer';
import {  Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Advantage from "./Pages/Advantage";
import About from './Pages/About';
import Creating from './Pages/Creating';
import CreatingExplore from './Pages/CreatingExplore';
import Team from './Pages/Team';
import Special from './Pages/Special';
import Products from "./Pages/Products";
import Price from "./Pages/Price";
import Careers from "./Pages/Careers";
import Customize from "./Pages/Customize"
import Demo from "./Pages/Demo"
import Ownsite from './Pages/OwnSite'



import ScrollToTop from './Pages/ScrollToTop';
// import { LanguageProvider } from "./LanguagesContext.js";

function App() {
  return (
    <div>
        <div className="">
          <Topbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="advantage" element={<Advantage />} />
            <Route path="special" element={<Special />} />
            <Route path="products" element={<Products />} />
            <Route path="creating" element={<Creating />} />
            <Route path="price" element={<Price />} />
            <Route path="careers" element={<Careers />} />
            <Route path="about" element={<About />} />
            <Route path="team" element={<Team />} />
            <Route path="creating_explore" element={<CreatingExplore />} />


            <Route path="customize" element={<Customize />} />
            <Route path="demo" element={<Demo />} />
            <Route path="ownsite" element={<Ownsite />} />
          </Routes>
          <Footer/>
        </div>
    </div>
  );
}

export default App;
