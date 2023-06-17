import React, { useState, useEffect } from "react";
import { useFetch } from "../../useFetch";
import { charactersUrl, ts, publicKey, hash, limit } from "../../utils/utils";
import SearchFilter from "../Search/Search";
import CharacterList from "../List/ListCharacters";
import PaginationButtons from "../PaginationButton/PaginationButton";

const ListCharacters = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useFetch(
    `${charactersUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}`
  );

  useEffect(() => {
    setVisibleCount(5);
  }, [searchTerm]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 5);
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 5, 5));
  };

  const handleReset = () => {
    setVisibleCount(5);
  };

  return (
    <>
      <h2 className="h2-list">Characters</h2>
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container">
      {error && <p>Error: {error}</p>}
      {loading && <p>Loading...</p>}
        <CharacterList data={data} searchTerm={searchTerm} visibleCount={visibleCount} />
        {data && (
          <PaginationButtons
            handleShowLess={handleShowLess}
            handleShowMore={handleShowMore}
            handleReset={handleReset}
            visibleCount={visibleCount}
            data={data}
          />
        )}
      </div>
    </>
  );
};

export default ListCharacters;