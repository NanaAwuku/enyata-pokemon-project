import React, { useState } from "react";
import PokemonCard from "./PokemonCard";
import ReactPaginate from "react-paginate";

const PokemonList = ({ pokeData, loading }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const perPage = 6;
  const pageCount = Math.ceil(pokeData.length / perPage);
  const offset = currentPage * perPage;
  const currentPageData = pokeData.slice(offset, offset + perPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <>
      <div className="container mx-auto pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {loading ? (
            <h1>Loading...</h1>
          ) : (
            currentPageData.map((pokemon) => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))
          )}
        </div>
        <ReactPaginate
          previousLabel={"Prev"}
          nextLabel={"Next"}
          pageCount={pageCount}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default PokemonList;
