import React, { useState } from "react";
import Modal from "../components/modals/Modal";

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
    <div className=" shadow-md p-4 flex flex-col items-center m-3 relative rounded-xl" >
      <div className="bg-gray-200 flex justify-center w-full h-[150px] rounded-xl pb-20 mb-2 items-center">
        <img
          src={sprites.front_default}
          alt={name}
          className="w-[200px] h-[240px] mb-4"
        />
      </div>

      <h3 className="text-lg font-bold mb-3 capitalize text-gray-900">{name}</h3>
      <div className="flex mt-2">
        {types.map((type) => (
          <span
            key={type.slot}
            className="text-sm text-gray-700 bg-gray-200 px-2 py-1 capitalize rounded-full mr-2"
          >
            {typeEmojis[type.type.name]} {type.type.name}
          </span>
        ))}
        <div className="w-full h-full bg-black inset-0 absolute bg-opacity-20 top-0 left-0 z-[5] hidden group-hover:block rounded-xl ">
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
