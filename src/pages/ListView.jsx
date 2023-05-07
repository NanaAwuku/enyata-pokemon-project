import PokemonCard from "../components/card";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import ReactPaginate from "react-paginate";
import ThemeModal from "../components/ThemeModal";
import { Link } from "react-router-dom";

const ListView = ({
  pokeData,
  loading,
  error,
  selectedTheme,
  setSelectedTheme,
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [pageSize, setPageSize] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const pageSizeOptions = [8, 16, 24, 32];

  useEffect(() => {
    const root = document.documentElement;
    if (selectedTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [selectedTheme]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("selectedTheme");
    if (storedTheme) {
      setSelectedTheme(storedTheme);
    }
  }, []);

  const handlePageSizeChange = (e) => {
    setPageSize(parseInt(e.target.value));
    setCurrentPage(0); // Reset the current page when the page size changes
  };

  const filteredData = pokeData.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(0);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const handleThemeChange = () => {
    setShowModal(true);
  };

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
    setShowModal(false);
    localStorage.setItem("selectedTheme", theme);
  };

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;

  const currentPageData = filteredData.slice(startIndex, endIndex);
  const pageCount = Math.ceil(filteredData.length / pageSize);

  const handleModalClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <header className="bg-white shadow-sm py-4 mx-6 mb-5">
        <div className="container flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-bold">
              <Link to="/" className="text-black">
                Poke<span className="text-red-500">book</span>
              </Link>
            </h3>
          </div>
          <div className="hidden sm:flex items-center">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-2 rounded-full text-gray-600 border-2 w-[450px] focus:outline-none focus:ring-2 focus:ring-red-400"
                value={searchTerm}
                onChange={handleSearch}
              />
              <button className="ml-2 px-4 py-3 rounded-full bg-red-500 text-white absolute right-2">
                <FaSearch size={20} />
              </button>
            </div>
          </div>
          <div className="flex items-center">
            <button
              className="ml-4 px-5 py-5 sm:py-5 bg-red-500 rounded-full hover:bg-red-600 transition-colors duration-300"
              onClick={handleThemeChange}
            ></button>
          </div>
        </div>
      </header>
      <div className="container mx-auto py-8">
        {loading ? (
          <h1>Loading...</h1>
        ) : error ? (
          <h1>{error}</h1>
        ) : filteredData.length ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
              {currentPageData.map((item) => (
                <PokemonCard key={item.id} pokemon={item} />
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 flex-wrap">
              <div className="flex justify-start items-center">
                <ReactPaginate
                  pageCount={pageCount}
                  marginPagesDisplayed={0}
                  pageRangeDisplayed={5}
                  onPageChange={handlePageChange}
                  containerClassName="pagination"
                  pageClassName="px-2 py-1 rounded"
                  activeLinkClassName="bg-red-600 p-2"
                  previousClassName="px-2 py-1 rounded"
                  nextClassName="px-2 py-1 rounded"
                  previousLabel={"Prev"}
                  nextLabel={"Next"}
                  breakClassName={"px-2 py-1"}
                  breakLinkClassName={"text-red-500"}
                  disabledClassName={"text-gray-400"}
                />
              </div>

              <div className="flex justify-center items-center">
                <label className="block mr-2 text-gray-700">Page Size:</label>
                <select
                  className="px-4 py-1 rounded-lg text-gray-600 border-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  value={pageSize}
                  onChange={handlePageSizeChange}
                >
                  {pageSizeOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </>
        ) : (
          <h1>No results found</h1>
        )}
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
