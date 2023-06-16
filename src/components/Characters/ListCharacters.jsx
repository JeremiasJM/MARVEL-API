import { Link } from 'react-router-dom';
import { useFetch } from '../../useFetch';
import { charactersUrl, ts, publicKey, hash, limit } from "../../utils/utils";


export const ListCharacters = () => {
  const { data, loading, error } = useFetch(
    `${charactersUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}`
  );
  console.log(data);

  return (
    <>
    <h2 className=" h2-list">Charactes</h2>
    <div className="container ">
      <div className="container-list container">
        {error && <li>Error:{error} </li>}
        {loading && <p>loading...</p>}
        {data?.map((personaje) => (
          <div key={personaje.id} to={`/comics/${personaje.id}`} className="card-list">
            <img
              src={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
              alt=""
            />
            <h1 className="title-list" key={personaje.id} >
              {personaje.name}{" "}
            </h1>
            <Link to={`/characters/${personaje.id}`} className='btn-details'>Details</Link>
          </div>
        ))}
      </div>
    </div>
  </>
  );
};
