import React, { useState, useEffect } from "react";
import { FiArrowLeft } from "react-icons/fi";

const Modal = ({ pokemon, closeModal }) => {
  // Component code...

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
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

        <div className="absolute top-4 left-4 bg-white py-2 px-2 rounded-lg">
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
  // Emoji mapping code...
};

export default Modal;
