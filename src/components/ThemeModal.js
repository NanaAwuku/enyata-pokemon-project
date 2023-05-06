import React from "react";

const ThemeModal = ({ closeModal, handleThemeSelect, selectedTheme }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-4">
        <h2 className="text-xl font-bold mb-4">Select Theme</h2>
        <div className="flex flex-col gap-2">
          <button
            className={`theme-button ${selectedTheme === "light" ? "active" : ""}`}
            onClick={() => handleThemeSelect("light")}
          >
            Light Theme
          </button>
          <button
            className={`theme-button ${selectedTheme === "dark" ? "active" : ""}`}
            onClick={() => handleThemeSelect("dark")}
          >
            Dark Theme
          </button>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={closeModal}
          >
            Close
          </button>
        </div>
      </div>
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={closeModal}
      ></div>
    </div>
  );
};

export default ThemeModal;
