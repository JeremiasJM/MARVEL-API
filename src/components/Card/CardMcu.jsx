import { Link } from "react-router-dom";

export const CardMcu = ({ id, thumbnail, name }) => {
  return (
    <Link to={`/MARVEL-API/mcu/${id}`}>
      <div className="card-mcu">
        <img loading="lazy" src={thumbnail} alt="imagen-mcu" />
        <h1 className="card-mcu-name">{name} </h1>
      </div>
    </Link>
  );
};
