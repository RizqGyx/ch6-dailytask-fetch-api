import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Aboutus from "../components/Aboutus";
import Car from "../components/Car";
import Footer from "../components/Footer";
import useGet from "../hooks/useGet";

const Home = () => {
  const { data, loading, error, fetchData } = useGet();

  useEffect(() => {
    fetchData(`/api/v1/car?limit=10&page=1`);
  }, []);

  return (
    <div className="relative flex flex-col gap-4 min-h-screen">
      <Navbar />
      <Hero />
      <Aboutus />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && <Car data={data} />}
      <Footer />
    </div>
  );
};

export default Home;
