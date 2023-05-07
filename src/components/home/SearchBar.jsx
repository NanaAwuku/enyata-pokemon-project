
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Enter Pokemon name"
        className="pl-12 pr-4 py-3 rounded-full text-gray-600 border-2 w-full focus:outline-none focus:ring-2 focus:ring-red-400 sm:w-96"
      />
      <Link to="/list">
        <button className="ml-2 px-5 py-4 rounded-full bg-red-500 text-white absolute right-2 top-1/2 transform -translate-y-1/2">
          <FaSearch size={16} />
        </button>
      </Link>
    </div>
  )
}

export default SearchBar