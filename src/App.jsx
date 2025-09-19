import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
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
          <Route path="/home-page" element={<HomePage />} />
             <Route path="/contact-us" element={<ContactUs />} />
              <Route path="/gallery" element={<Gallery />} />


        </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;


{/* <div className="absolute bottom-20 left-1/3 text-5xl text-cyan-400 opacity-70 animate-spin-slow drop-shadow-lg">
  🎧
</div> */}
