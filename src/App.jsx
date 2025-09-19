import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ArtistStatci from "./components/ArtistStatci";
import ArtistForm from "./components/ArtistForm";
import Footer from "./components/Footer";

import HomePage from "./components/HomePage";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";
const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
        <Navbar />
<main className="min-h-screen transition-colors pt-20">
        {/* Routes */}
        <Routes>
          {/* <Route path="/" element={<LandingPage />} /> */}
          <Route path="/login" element={<Login />} />    {/* lowercase */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/artist-form" element={<ArtistForm />} />
          <Route path="/static" element={<ArtistStatci />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/gallery" element={<Gallery />} />


        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;


