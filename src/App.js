import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import WarehouseService from './WarehouseService';
import LogisticsService from './LogisticsService';
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ToastContainer />
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/warehousing" element={<WarehouseService/>} />
        <Route path="/logistics" element={<LogisticsService/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
