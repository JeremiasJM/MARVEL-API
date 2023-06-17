import React from "react";
import { Link } from "react-router-dom";

export const CardMcu = ({id, thumbnail, name}) => {
  return (
    <Link to={`/mcu/${id}`}>
      <div>
      <img
        src={thumbnail}
        alt=""
      />
      <h1>{name} </h1>
      </div>
    </Link>
  );
};
