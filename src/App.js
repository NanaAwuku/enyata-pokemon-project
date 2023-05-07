import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Hero from "./pages/Home";
import ListView from "./pages/ListView";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState("light");

  const fetchPokeData = async (url) => {
    try {
      const res = await axios.get(url);
      const { results, next } = res.data;

      const dataPromises = results.map((item) => axios.get(item.url));
      const dataResponses = await Promise.all(dataPromises);
      const pokemonData = dataResponses.map((response) => response.data);

      setPokeData((prevData) => [...prevData, ...pokemonData]);

      if (next) {
        fetchPokeData(next);
      } else {
        setLoading(false);
      }
    } catch (error) {
      setError("An error occurred while fetching Pokémon data.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokeData("https://pokeapi.co/api/v2/pokemon?limit=100");
  }, []);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Hero pokeData={pokeData} loading={loading} selectedTheme={selectedTheme} />}
        />
        <Route
          path="/list"
          element={<ListView pokeData={pokeData} loading={loading} error={error} selectedTheme={selectedTheme} setSelectedTheme={setSelectedTheme} />}
        />
      </Routes>
    </>
  );
}

export default App;
