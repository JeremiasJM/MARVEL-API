import { Link } from "react-router-dom";

const ComicsCard = ({ personaje }) => {
  return (
    <div
      key={personaje.id}
      to={`/MARVEL-API/comics${personaje.id}`}
      className="card-list"
    >
      <img
        loading="lazy"
        src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
        alt={personaje.title}
      />
      <h1 className="title-list" key={personaje.id}>
        {personaje.title}
      </h1>
      <Link to={`/MARVEL-API/comics/${personaje.id}`} className="btn-details">
        Details
      </Link>
    </div>
  );
};

export default ComicsCard;
