import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "./Card";

const Car = ({ data, pagination }) => {
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);

  const handleLoadMore = () => {
    setShowAll(true);
    setDisplayCount(data.length);
  };

  return (
    <div
      className="w-full md:w-11/12 mx-auto py-5 pb-80 flex items-center flex-col"
      id="car"
    >
      <h2 className="text-violet-900 font-bold text-4xl pb-5">
        Our Featured Car
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Disini Pengenya Sih Letak Card Mapping */}
      </div>
      {!showAll && (
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-violet-900 hover:bg-violet-700 text-white font-bold py-3 px-10 rounded-full mt-4"
          onClick={handleLoadMore}
        >
          See More
        </motion.button>
      )}
    </div>
  );
};

export default Car;
