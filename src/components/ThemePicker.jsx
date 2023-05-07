import React, { useState } from "react";

const ThemePicker = ({ selectedTheme, handleThemeSelect }) => {
  const [showPicker, setShowPicker] = useState(false);

  const togglePicker = () => {
    setShowPicker(!showPicker);
  };

  const selectTheme = (theme) => {
    handleThemeSelect(theme);
    setShowPicker(false);
  };

  return (
    <div className="relative">
      <button
        className="ml-4 px-5 py-5 sm:py-5 bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-300"
        onClick={togglePicker}
      ></button>
      {showPicker && (
        <div className="theme-picker">
          <button
            className={`theme-option ${selectedTheme === "light" ? "active" : ""}`}
            onClick={() => selectTheme("light")}
          >
            Light Theme
          </button>
          <button
            className={`theme-option ${selectedTheme === "dark" ? "active" : ""}`}
            onClick={() => selectTheme("dark")}
          >
            Dark Theme
          </button>
        </div>
      )}
    </div>
  );
};

export default ThemePicker;
