import React from "react";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search">
      <input
        className="input"
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Buscar personaje"
      />
    </div>
  );
};

export default SearchFilter;
