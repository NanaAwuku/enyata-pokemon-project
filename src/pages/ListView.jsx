import React, { useState } from "react";
import PokemonCard from "../components/card";
import ReactPaginate from "react-paginate";
import ThemeModal from "../components/ThemeModal";

const ListView = ({ pokeData, loading }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState("light");

  const itemsPerPage = 12;

  const filteredData = pokeData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0); // Reset the current page when the search term changes
  };

  const handleThemeChange = () => {
    setShowModal(true);
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setShowModal(false);
    
    if (theme === "dark") {
      // Apply dark theme
      document.documentElement.classList.add("dark-theme");
    } else {
      // Apply light theme
      document.documentElement.classList.remove("dark-theme");
    }
  };

  const handlePageChange = (selected) => {
    setCurrentPage(selected.selected);
  };

  const pageCount = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = filteredData.slice(startIndex, endIndex);

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <header className="bg-white shadow-sm">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">
              Poke<span className="text-red-500">book</span>
            </h3>
          </div>
          <div className="hidden sm:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-full text-gray-600 border-2  w-[400px] focus:outline-none focus:ring-2 focus:ring-red-400"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="ml-4 px-5 py-5 bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-300"
              onClick={handleThemeChange}
            >
              {/* No text inside the button */}
            </button>
          </div>
        </div>
      </header>
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {loading ? (
            <h1>Loading...</h1>
          ) : filteredData.length ? (
            currentPageData.map((item) => (
              <PokemonCard key={item.id} pokemon={item} />
            ))
          ) : (
            <h1>No results found</h1>
          )}
        </div>
      </div>
      <div className=" mt-4">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          pageLinkClassName={"py-1 px-2 bg-blue-500 text-white rounded"}
          previousLinkClassName={"text-blue-500"}
          nextLinkClassName={"text-blue-500"}
          disabledClassName={"text-gray-400"}
          />
          </div>
          {showModal && (
          <ThemeModal
                 selectedTheme={selectedTheme}
                 handleThemeSelect={handleThemeSelect}
                 closeModal={handleModalClose}
               />
          )}
          </>
          );
          };
          
          export default ListView;
