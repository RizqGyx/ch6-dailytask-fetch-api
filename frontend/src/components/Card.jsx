import React, { useState, useEffect } from "react";
import { FaStar, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Card({ data }) {
  console.log(data);
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const isRestFavorited = localStorage.getItem(`favorite_${data.id}`);
    setIsFavorite(isRestFavorited === "true");
  }, [data]);

  const handleFavoriteClick = (event) => {
    const updatedFavorite = !isFavorite;
    setIsFavorite(updatedFavorite);

    localStorage.setItem(`favorite_${data.id}`, updatedFavorite.toString());

    event.stopPropagation();
  };

  return (
    <div
      className="card h-96 max-w-[384px] overflow-hidden bg-white shadow-2xl cursor-pointer relative"
      onClick={() => {
        navigate(`/car/${data.id}`);
      }}
    >
      <div className="absolute top-2 right-2">
        <button className="focus:outline-none" onClick={handleFavoriteClick}>
          {isFavorite ? (
            <FaHeart className="text-red-500 text-3xl" />
          ) : (
            <FaHeart className="text-white text-3xl" />
          )}
        </button>
      </div>
      <img
        src={data.photo}
        alt={data.name}
        className="aspect-[17/9] w-full rounded object-cover"
      />
      <div className="card-body font-bold">
        <h2 className="card-title text-black">{data.name}</h2>
        <p className="text-black/50">{data.rentPerDay}</p>
      </div>
    </div>
  );
}

export default Card;
