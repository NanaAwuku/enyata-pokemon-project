import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "react-jss";
import SearchBar from "../components/home/SearchBar";
import Spinner from "../components/listview/Spinner";

const Hero = ({ pokeData, loading }) => {
  const heroImage =
    pokeData.length > 0 ? pokeData[16].sprites.front_default : "";
  const description =
    "Largest Pokémon index with information about every Pokemon you can think of. ";

  const theme = useTheme();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen m-10">
      {loading && <Spinner />}
      {heroImage && (
        <img src={heroImage} alt="Hero Image" className="w-62 h-[200px]" />
      )}
      <div className="text-center sm:w-96 mb-5  flex-wrap">
        <h1 className={`text-4xl font-bold `}>
          Poké<span className="text-red-500">book</span>
        </h1>
        <p className="text-lg">{description}</p>
      </div>
      <div className="flex items-center mt-6 justify-center">
        <SearchBar />
      </div>

      <Link to="/list" className={`mt-6  underline hover:`}>
        View More
      </Link>
    </div>
  );
};

export default Hero;
