import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import Hero from "./pages/Hero";
import ListView from "./pages/ListView";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setIsLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [error, setError] = useState(null);

  const fetchPokeData = async (fetchUrl) => {
    try {
      setIsLoading(true);
      const res = await axios.get(fetchUrl);
      setNextUrl(res.data.next);
      setPrevUrl(res.data.previous);
      getPokeItem(res.data.results);
      setIsLoading(false);
    } catch (error) {
      setError("An error occurred while fetching Pokémon data.");
      setIsLoading(false);
    }
  };

  const getPokeItem = async (results) => {
    try {
      const dataPromises = results.map((item) => axios.get(item.url));
      const dataResponses = await Promise.all(dataPromises);
      const pokeData = dataResponses.map((response) => response.data);
      setPokeData((state) => [...state, ...pokeData]);
    } catch (error) {
      setError("An error occurred while fetching Pokémon details.");
    }
  };

  const handleNextPage = () => {
    if (nextUrl) {
      setUrl(nextUrl);
    }
  };

  const handlePreviousPage = () => {
    if (prevUrl) {
      setUrl(prevUrl);
    }
  };

  useEffect(() => {
    fetchPokeData(url);
  }, [url]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Hero pokeData={pokeData} loading={loading} />}
        />
        <Route
          path="/list"
          element={
            <ListView
              pokeData={pokeData}
              loading={loading}
              onNextPage={handleNextPage}
              onPreviousPage={handlePreviousPage}
              error={error}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
