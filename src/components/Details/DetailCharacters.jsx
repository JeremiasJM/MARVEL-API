import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { charactersUrl, ts, publicKey, hash } from "../../utils/utils";
import { DotSpinner } from "@uiball/loaders";

export const DetailCharacters = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `${charactersUrl}/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  return (
    <>
      <main className="main-detail container">
        {error && <li>Error:{error} </li>}
        {loading && (
          <div className="loading">
            {" "}
            <DotSpinner size={40} speed={0.9} color="black" />
          </div>
        )}
        {data?.map((personaje) => (
          <div className="detail-card" key={Math.random() * 1000}>
            <img
              src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
              alt=""
            />
            <div className="detail-card-info">
              <h2>TITLE</h2>
              <p>{personaje.name} </p>
              {personaje.description ? (
                <>
                  <h2>DESCRIPTION</h2>
                  <p>{personaje.description}</p>
                </>
              ) : (
                <>
                  <p>Not Found Description</p>
                </>
              )}
              <ul>
                <h2>PERSONAJES:</h2>
                {personaje.series.items.length === 0 ? (
                  <p>Not found Series</p>
                ) : (
                  personaje.series.items.map((personaje) => (
                    <p key={Math.random() * 1000}> {personaje.name} </p>
                  ))
                )}
              </ul>
            </div>
          </div>
        ))}
      </main>
    </>
  );
};
