import React from "react";
import CharacterCard from "../Card/CardCharacter";

const CharacterList = ({ data, searchTerm, visibleCount }) => {
  return (
    <div className="container-list container">
      {data
        ?.filter((personaje) =>
          personaje.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .slice(0, visibleCount)
        .map((personaje) => (
          <CharacterCard key={personaje.id} personaje={personaje} />
        ))}
    </div>
  );
};

export default CharacterList;
