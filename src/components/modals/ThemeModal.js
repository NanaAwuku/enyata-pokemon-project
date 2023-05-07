import React, { useState } from "react";

const ThemeModal = ({ closeModal, setSelectedTheme }) => {
  const [selectedColor, setSelectedColor] = useState("");

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleApplyTheme = () => {
    setSelectedTheme(selectedColor);
    closeModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="bg-black bg-opacity-50 fixed inset-0"
        onClick={closeModal}
      ></div>
      <div className="bg-white rounded-lg w-full max-w-md p-4 mx-2 sm:mx-auto sm:w-96 relative z-50">
        <h3 className="text-xl font-bold text-center mb-2">
          Select Theme Color
        </h3>

        <div className="flex justify-center mb-4">
          <button
            className={`w-8 h-8 rounded-full bg-red-500 mr-2 ${
              selectedColor === "red" ? "border-2 border-white" : ""
            }`}
            onClick={() => handleColorSelect("red")}
          ></button>
          <button
            className={`w-8 h-8 rounded-full bg-blue-500 mr-2 ${
              selectedColor === "blue" ? "border-2 border-white" : ""
            }`}
            onClick={() => handleColorSelect("blue")}
          ></button>
          <button
            className={`w-8 h-8 rounded-full bg-green-500 mr-2 ${
              selectedColor === "green" ? "border-2 border-white" : ""
            }`}
            onClick={() => handleColorSelect("green")}
          ></button>
        </div>

        <div className="flex justify-center">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg"
            onClick={handleApplyTheme}
            disabled={!selectedColor}
          >
            Apply Theme
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThemeModal;
