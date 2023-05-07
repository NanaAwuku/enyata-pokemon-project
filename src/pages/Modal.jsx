import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";

const Modal = ({ pokemon, closeModal }) => {
  const { id, name, sprites, types, height, weight, abilities } = pokemon;
  const [activeTab, setActiveTab] = useState("about");
  const [statistics, setStatistics] = useState(null);
  const [similarPokemon, setSimilarPokemon] = useState([]);

  useEffect(() => {
    fetchStatistics();
    fetchSimilarPokemon();
  }, []);

  const fetchStatistics = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
      const data = await response.json();
      setStatistics(data.stats);
    } catch (error) {
      console.log("Error fetching statistics:", error);
    }
  };

  const fetchSimilarPokemon = async () => {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/type/${types[0].type.name}`
      );
      const data = await response.json();
      setSimilarPokemon(data.pokemon.slice(0, 2)); // Fetching only two similar Pokémon
    } catch (error) {
      console.log("Error fetching similar Pokémon:", error);
    }
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className='' >
            <h2 className="text-lg font-bold mb-2 text-center">About</h2>
          <div className="bg-white w-[300px] min-h-[150px] rounded-lg shadow-lg p-4">
            
            <div className="flex justify-between">
              <span className="font-bold">Height:</span> {height}
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Weight:</span> {weight}
            </div>
            <div className="flex justify-between">
              <span className="font-bold">Abilities:</span>{" "}
              {abilities.map((ability) => ability.ability.name).join(", ")}
            </div>
          </div>
          </div>
        );
      case "stats":
        return (
          <div className=" ">
            <h2 className="text-lg font-bold mb-2 text-center">Statistics</h2>
            {statistics ? (
              <ul className="bg-white w-[350px] min-h-[200px] rounded-lg shadow-lg p-3">
                {statistics.map((stat) => (
                  <li key={stat.stat.name} className="flex items-center">
                    <span className="font-bold w-2/4 capitalize flex justify-end pr-4 font">
                      {stat.stat.name}:
                    </span>
                    <div className="w-2/4 bg-gray-200 rounded-full h-1">
                      <div
                        className="bg-green-500 h-full rounded-full"
                        style={{ width: `${(stat.base_stat / 255) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-2">{stat.base_stat}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading statistics...</p>
            )}
          </div>
        );

        case "similar":
          
  return (
    <div className="">
      <h2 className="text-lg font-bold mb-4 text-center"  >Similar Pokémon</h2>
      {similarPokemon.length > 0 ? (
        <div className="grid grid-cols-2 gap-4 bg-white w-[300px] min-h-[150px] rounded-lg shadow-lg p-4">
          {similarPokemon.slice(0, 2).map((poke) => (
            <div key={poke.pokemon.name} className="bg-gray-100 p-2 rounded-lg">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.pokemon.url.split('/')[6]}.png`}
                alt={poke.pokemon.name}
                className="w-12 h-12 mx-auto mb-2"
              />
              <div className="text-center">{poke.pokemon.name}</div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading similar Pokémon...</p>
      )}
    </div>
  );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-end mr-5 z-50">
    <div className="bg-black bg-opacity-50 fixed inset-0" onClick={closeModal}></div>
    <div className="bg-white rounded-lg w-full max-w-md h-full relative z-50">
      <div className="p-4">
        <div className="flex items-center justify-center bg-green-200 rounded-lg p-2 mb-4">
          <img
            src={sprites.front_default}
            alt={name}
            className="w-48 h-auto"
          />
        </div>
        <h3 className="text-xl font-bold text-center mb-2">{name}</h3>

        <div className="flex flex-wrap justify-center mb-4">
          {types.map((type) => (
            <span
              key={type.slot}
              className="text-sm text-gray-700 bg-gray-200 px-3 py-1 rounded-full mr-2 mb-2"
              role="img"
              aria-label={type.type.name}
            >
              {getEmojiForType(type.type.name)}
              {type.type.name}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-center">
          {renderTabContent()}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex justify-between bg-slate-100 rounded-lg px-3 py-2">
        <button
          className={`py-2 px-4 rounded-lg ${
            activeTab === "about" ? "bg-white" : ""
          }`}
          onClick={() => handleTabClick("about")}
        >
          About
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            activeTab === "stats" ? "bg-white" : ""
          }`}
          onClick={() => handleTabClick("stats")}
        >
          Stats
        </button>
        <button
          className={`py-2 px-4 rounded-lg ${
            activeTab === "similar" ? "bg-white" : ""
          }`}
          onClick={() => handleTabClick("similar")}
        >
          Similar
        </button>
      </div>

      <div className="absolute top-5 left-6 bg-white py-2 px-2 rounded-lg">
        <button
          onClick={closeModal}
          className="text-gray-500 hover:text-gray-700"
        >
          <FiArrowLeft />
        </button>
      </div>
    </div>
  </div>
  );
};

// Helper function to get emoji for a given Pokémon type
const getEmojiForType = (type) => {
  switch (type) {
    case "grass":
      return "🌿";
    case "fire":
      return "🔥";
    case "water":
      return "💧";
    case "electric":
      return "⚡";
    case "ice":
      return "❄️";
    case "fighting":
      return "🥊";
    case "poison":
      return "☠️";
    case "ground":
      return "⛰️";
    case "flying":
      return "🦅";
    case "psychic":
      return "🔮";
    case "bug":
      return "🐛";
    case "rock":
      return "🪨";
    case "ghost":
      return "👻";
    case "dark":
      return "🌑";
    case "dragon":
      return "🐉";
    case "steel":
      return "🔩";
    case "fairy":
      return "🧚";
    default:
      return "";
  }
};

export default Modal;
