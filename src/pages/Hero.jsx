import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { useTheme } from "react-jss";

const Hero = ({ pokeData, loading }) => {
  const heroImage =
    pokeData.length > 0 ? pokeData[16].sprites.front_default : "";
  const description = "Explore the amazing world of Pokémon.";

  const theme = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {heroImage && (
        <img src={heroImage} alt="Hero Image" className="w-62 h-[200px]" />
      )}
      <div className="text-center">
        <h1 className={`text-4xl font-bold ${theme.color}`}>
          Poké<span className="text-red-500">book</span>
        </h1>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex items-center mt-6 justify-center">
        <div className="relative ">
          <input
            type="text"
            placeholder="Search"
            className={`pl-12 pr-4 py-3 rounded-full text-gray-600 border-2 ${theme.borderColor} w-[400px] focus:outline-none focus:ring-2 focus:ring-red-400`}
          />
          <button className={`ml-2 px-5 py-4 rounded-full ${theme.backgroundColor} text-white absolute right-2`}>
            <FaSearch size={16} />
          </button>
        </div>
      </div>

      <Link to="/list" className={`mt-6  underline hover:${theme.hoverColor}`}>
        View More
      </Link>
    </div>
  );
};

export default Hero;
