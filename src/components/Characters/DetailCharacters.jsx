import { useParams } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { charactersUrl, ts, publicKey, hash } from "../../utils/utils";

export const DetailCharacters = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    `${charactersUrl}/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
  );
  console.log(data);
  return (
    <>
       <main className="main-detail container"  >
        {error && <li>Error:{error} </li>}
        {loading && <p>loading...</p>}
        {data?.map((personaje) => (
          <div className="detail-card" key={Math.random() * 1000}>
            
            <img src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`} alt="" />
            <div className="detail-card-info">
              <h2>Titulo</h2>
            <h3 >{personaje.name} </h3>
            {personaje.description ? (
              <>
                <h2>Description</h2>  
                <p>{personaje.description}</p>
              </>
            ) : (
              <>
                <p>Not Found Description</p>
              </>
            )}
             <ul>
              <h2>personaje:</h2>
              {personaje.series.items.length === 0 ? (
                <p>Not found</p>
              ) : (
                personaje.series.items.map((personaje) => (
                  <li key={Math.random() * 1000}> -{personaje.name} </li>
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
