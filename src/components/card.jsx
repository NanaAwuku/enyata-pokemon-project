import React, { useState } from "react";
import Modal from "../pages/Modal";

// Define a mapping of type names to emojis
const typeEmojis = {
  normal: "⚪️",
  fire: "🔥",
  water: "💧",
  electric: "⚡️",
  grass: "🌿",
  ice: "❄️",
  fighting: "🥊",
  poison: "☠️",
  ground: "⛰️",
  flying: "🦅",
  psychic: "🔮",
  bug: "🐛",
  rock: "🪨",
  ghost: "👻",
  dragon: "🐉",
  dark: "🌑",
  steel: "🔩",
  fairy: "🧚",
};

const PokemonCard = ({ pokemon }) => {
  const { id, name, sprites, types } = pokemon;
  const [showModal, setShowModal] = useState(false);
  const [activeID, setActiveID] = useState(null);

  const showModalHandler = (id) => {
    setShowModal(true);
    setActiveID(id);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center relative">
      <img src={sprites.front_default} alt={name} className="w-32 h-32 mb-4" />
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <div className="flex mt-2">
        {types.map((type) => (
          <span
            key={type.slot}
            className="text-sm text-gray-700 bg-gray-200 px-2 py-1 rounded-full mr-2"
          >
            {typeEmojis[type.type.name]} {type.type.name}
          </span>
        ))}
        <div className="w-full h-full bg-slate-400 absolute bg-opacity-40 top-0 left-0 z-[5] hidden group-hover:block ">
          <div className="w-full h-full flex items-center justify-center">
            <button
              onClick={() => showModalHandler(id)}
              className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200 "
            >
              See Details
            </button>
          </div>
        </div>
      </div>
      {showModal && <Modal closeModal={closeModal} pokemon={pokemon} />}
    </div>
  );
};

export default PokemonCard;
