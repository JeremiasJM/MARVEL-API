import { Link } from "react-router-dom";
import { useFetch } from "../../useFetch";
import { comicsUrl, ts, publicKey, hash, limit } from "../../utils/utils";

export const ListComics = () => {
  const { data, loading, error } = useFetch(
    `${comicsUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=${limit}`
  );
  console.log(data);

  return (
    <>
      <h2 className=" h2-list">Comics</h2>
      <div className="container ">
        <div className="container-list container">
        {error && <li>Error:{error} </li>}
        {loading && <p>loading...</p>}
        {data?.map((comics) => (
          <div key={comics.id} to={`/comics/${comics.id}`} className="card-list">
            <img
              src={`${comics.thumbnail.path}.${comics.thumbnail.extension}`}
              alt=""
            />
            <h1 className="title-list" key={comics.id} >
              {comics.title}{" "}
            </h1>
            <Link to={`/characters/${comics.id}`} className='btn-details'>Details</Link>
          </div>
          ))}
        </div>
      </div>
    </>
  );
};
