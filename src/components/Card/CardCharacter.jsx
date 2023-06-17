import React from "react";
import { Link } from "react-router-dom";

const CharacterCard = ({ personaje }) => {
  return (
    <div key={personaje.id} to={`/comics/${personaje.id}`} className="card-list">
      <img
        src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
        alt=""
      />
      <h1 className="title-list" key={personaje.id}>
        {personaje.name}
      </h1>
      <Link to={`/characters/${personaje.id}`} className="btn-details">
        Details
      </Link>
    </div>
  );
};

export default CharacterCard;
