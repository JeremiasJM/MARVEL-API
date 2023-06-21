import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { comicsUrl, ts, publicKey, hash } from "../../utils/utils";
import { DotSpinner } from "@uiball/loaders";

export const DetailComics = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `${comicsUrl}/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
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
        {data?.map((comic) => (
          <div className="detail-card" key={Math.random() * 1000}>
            <img
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
              alt=""
            />
            <div className="detail-card-info">
              <h2>Titulo</h2>
              <h3>{comic.title} </h3>
              {comic.description ? (
                <>
                  <h2>Description</h2>
                  <p>{comic.description}</p>
                </>
              ) : (
                <>
                  <h2>Not Found Description</h2>
                </>
              )}
              <ul>
                <h2>Characters :</h2>
                {comic.characters.items.length === 0 ? (
                  <p>Not found Characters</p>
                ) : (
                  comic.characters.items.map((c) => (
                    <p key={Math.random() * 1000}> -{c.name} </p>
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
