import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-light w-full min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
