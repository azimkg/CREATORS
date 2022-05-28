import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import OurWorks from "./components/OurWorks/OurWorks";

const Routing = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<OurWorks />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
