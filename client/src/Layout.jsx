import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.jsx";
import Property from "./pages/Property.jsx";
import Login from "./pages/Login.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import SignUp from "./pages/SignUp.jsx";
import AdminDashboard from "./pages/AdminDashboard.jsx";
import Properties from "./components/Properties.jsx";
import Homesidebar from "./components/HomeSidebar.jsx";
import Settings from "./components/Settings.jsx";
import ScrollToTop from './ScrollToTop';
import Cookies from './components/Cookies.jsx';

function Layout() {
  const [showCookies, setShowCookies] = useState(true);

  useEffect(() => {
    // Check if cookies have been accepted
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (cookiesAccepted === 'true') {
      setShowCookies(false);
    }
  }, []);

  const handleCookiesAgree = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setShowCookies(false);
  };

  const handleCookiesDecline = () => {
    localStorage.setItem('cookiesAccepted', 'false');
    setShowCookies(false);
  };

  return (
    <Router>
      <Navbar />
      {showCookies && <Cookies onAgree={handleCookiesAgree} onDecline={handleCookiesDecline} />}
      <ScrollToTop /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/properties" element={<Property />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/properties-management" element={<Properties />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/admin-home" element={<Homesidebar />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default Layout;
