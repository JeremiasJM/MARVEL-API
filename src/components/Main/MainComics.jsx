import React, { useState, useEffect } from "react";
import { useFetch } from "../../useFetch";
import { comicsUrl, ts, publicKey, hash, limit } from "../../utils/utils";
import SearchFilter from "../Search/Search";
import PaginationButtons from "../PaginationButton/PaginationButton";
import ComicsList from "../List/ListComics";
import { DotSpinner } from "@uiball/loaders";

const MainComics = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useFetch(
    `${comicsUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}`
  );

  useEffect(() => {
    setVisibleCount(6);
  }, [searchTerm]);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  const handleShowLess = () => {
    setVisibleCount((prevCount) => Math.max(prevCount - 6, 6));
  };

  const handleReset = () => {
    setVisibleCount(6);
  };

  return (
    <>
      <h2 className="h2-list">Comics</h2>
      <SearchFilter searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="container">
        {error && <p>Error: {error}</p>}
        {loading && (
          <div className="loading">
            {" "}
            <DotSpinner size={40} speed={0.9} color="black" />
          </div>
        )}
        <ComicsList
          data={data}
          searchTerm={searchTerm}
          visibleCount={visibleCount}
        />
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

export default MainComics;
