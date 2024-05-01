import React, { useState } from "react";
import Card from "./Card";

const Car = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const [displayCount, setDisplayCount] = useState(6);

  const handleLoadMore = () => {
    setShowAll(true);
    setDisplayCount(data.length);
  };

  return (
    <div
      className="w-full md:w-11/12 mx-auto py-5 flex items-center flex-col"
      id="car"
    >
      <h2 className="text-orange-600 font-bold text-4xl pb-5">
        Our Featured Car
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((car, index) => (
          <Card
            id={restaurant.id}
            key={index}
            imgUrl={restaurant.image}
            restName={restaurant.name}
            price={restaurant.averagePrice}
            avgReview={restaurant.averageRating}
            location={restaurant.location}
            foodCategory={restaurant.foodCategory}
          />
        ))}
      </div>
      {!showAll && (
        <button
          className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-full mt-4"
          onClick={handleLoadMore}
        >
          See More
        </button>
      )}
    </div>
  );
};

export default Car;
