import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import WarehouseService from './WarehouseService';
import LogisticsService from './LogisticsService';

function App() {
  return (
    <Router>
      <NotificationContainer/>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path="/warehousing" element={<WarehouseService/>} />
        <Route path="/logistics" element={<LogisticsService/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
