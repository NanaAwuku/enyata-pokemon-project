import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const Hero = ({ pokeData, loading }) => {
  const heroImage =
    pokeData.length > 0 ? pokeData[0].sprites.front_default : "";
  const description = "Explore the amazing world of Pokémon.";



  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {heroImage && (
        <img
          src={heroImage}
          alt="Hero Image"
          className="w-72 h-72"
        />
      )}
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Pokémon World!</h1>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex items-center mt-6">
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-full text-gray-600 border-2 w-80 focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button className="ml-2 px-4 py-2 rounded-full bg-red-500 text-white">
          <FaSearch size={20} />
        </button>
      </div>
   
        <Link to="/list">View More</Link>
      
    </div>
  );
};

export default Hero;
