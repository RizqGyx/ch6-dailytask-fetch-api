import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Aboutus from "../components/Aboutus";

const Home = () => {
  return (
    <div className="relative flex flex-col gap-4 min-h-screen">
      <Navbar />
      <Hero />
      <Aboutus />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
