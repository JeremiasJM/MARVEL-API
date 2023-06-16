import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { comicsUrl, ts, publicKey, hash } from "../../utils/utils";

export const DetailComics = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `${comicsUrl}/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  console.log(data);
  return (
    <>
      <main className="main-detail container"  >
        {error && <li>Error:{error} </li>}
        {loading && <p>loading...</p>}
        {data?.map((comic) => (
          <div className="detail-card" key={Math.random() * 1000}>
            
            <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="" />
            <div className="detail-card-info">
              <h2>Titulo</h2>
            <h3 >{comic.title} </h3>
            {comic.description ? (
              <>
                <h2>Description</h2>
                <p>{comic.description}</p>
              </>
            ) : (
              <>
                <p>Not Found Description</p>
              </>
            )}
             <ul>
              <h2>Personajes:</h2>
              {comic.characters.items.length === 0 ? (
                <p>Not found</p>
              ) : (
                comic.characters.items.map((c) => (
                  <li key={Math.random() * 1000}> -{c.name} </li>
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