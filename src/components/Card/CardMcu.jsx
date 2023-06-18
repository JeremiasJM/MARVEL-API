import { Link } from "react-router-dom";

export const CardMcu = ({ id, thumbnail, name }) => {
  return (
    <Link to={`/mcu/${id}`}>
      <div className="card-mcu">
        <img src={thumbnail} alt="" />
        <h1 className="card-mcu-name">{name} </h1>
      </div>
    </Link>
  );
};
