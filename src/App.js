import './App.css';
import Topbar from './Pages/Topbar';
import Footer from './Pages/Footer';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Advantage from "./Pages/Advantage";
import Products from "./Pages/Products";
import Careers from "./Pages/Careers";
import ScrollToTop from './Pages/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Advantage" element={<Advantage />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Careers" element={<Careers />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
