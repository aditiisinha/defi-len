import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Lend from "./pages/Lend";
import Borrow from "./pages/Borrow";

const App = () => {
  return (
    <Router> {/* Fixed: Using BrowserRouter as Router */}
      <Navbar />
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lend" element={<Lend />} />
          <Route path="/borrow" element={<Borrow />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
