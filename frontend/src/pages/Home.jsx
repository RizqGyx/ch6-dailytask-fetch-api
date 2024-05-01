import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import Car from "../components/Car";
import Footer from "../components/Footer";

const Home = ({ fetch }) => {
  const { cars, pagination } = fetch;

  return (
    <div className="relative flex flex-col gap-4 min-h-screen">
      <Navbar />
      <Hero />
      <Aboutus />
      <Car data={cars} pagination={pagination} />
      <Footer />
    </div>
  );
};

export default Home;
