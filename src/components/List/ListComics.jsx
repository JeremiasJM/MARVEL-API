import React from "react";
import ComicsCard from "../Card/CardComics";

const ComicsList = ({ data, searchTerm, visibleCount }) => {
  return (
    <div className="container-list container">
      {data
        ?.filter((personaje) =>
          personaje.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, visibleCount)
        .map((personaje) => (
          <ComicsCard key={personaje.id} personaje={personaje} />
        ))}
    </div>
  );
};

export default ComicsList;
