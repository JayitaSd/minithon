import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";

const App = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-gray-50 dark:bg-slate-900">
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />    {/* lowercase */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


{/* <div className="absolute bottom-20 left-1/3 text-5xl text-cyan-400 opacity-70 animate-spin-slow drop-shadow-lg">
  🎧
</div> */}
