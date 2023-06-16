import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { comicsUrl, ts, publicKey, hash, limit } from "../../utils/utils";

export const ListComics = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");

  const { data, loading, error } = useFetch(
    `${comicsUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}`
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
      <div className="search">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Buscar personaje"
        />
      </div>
      <div className="container">
        <div className="container-list container">
          {error && <li>Error: {error}</li>}
          {loading && <p>Loading...</p>}

          {data
            ?.filter((comics) =>
              comics.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .slice(0, visibleCount)
            .map((comics) => (
              <div
                key={comics.id}
                to={`/comics/${comics.id}`}
                className="card-list"
              >
                <img
                  src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
                  alt=""
                />
                <h1 className="title-list" key={comics.id}>
                  {comics.title}
                </h1>
                <Link to={`/comics/${comics.id}`} className="btn-details">
                  Details
                </Link>
              </div>
            ))}
        </div>
        {data && (
          <div className="pagination-buttons">
            {visibleCount > 5 && (
              <button onClick={handleShowLess} className="btn-pagination">
                Volver atrás
              </button>
            )}
            {data.length > visibleCount && (
              <button onClick={handleShowMore} className="btn-pagination">
                Ver más
              </button>
            )}
            {visibleCount > 5 && (
              <button onClick={handleReset} className="btn-pagination">
                Volver a las primeras
              </button>
            )}
          </div>
        )}
      </div>
    </>
  );
};
