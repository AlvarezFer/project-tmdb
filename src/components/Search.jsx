import React, { useState } from "react";
import "../estilos.css/search.css";
import { FaSearch } from "react-icons/fa";

const Search = ({ buscador }) => {
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    buscador(search);
  };

  return (
    <form className="searchContainer" onSubmit={handleSubmit}>
      <div className="searchBox">
        <input
          className="searchInput"
          onChange={handleInput}
          type="text"
          placeholder="Search"
          value={search}
        />

        <button className="searchButton" type="submit">
          <FaSearch size={20} />
        </button>

        <br />
      </div>
    </form>
  );
};

export default Search;
