import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchHero } from "../../utils/utils";
import { DotSpinner } from "@uiball/loaders";

export const McuDetails = () => {
  let { id } = useParams();

  const [hero, setHero] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchHero(id)
      .then((data) => {
        setTimeout(() => {
          setHero(data[0]);
          setIsLoading(false);
        }, 2000);
      })
      .catch((err) => console.error(err));
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        {" "}
        <DotSpinner size={40} speed={0.9} color="black" />
      </div>
    );
  }

  return (
    <div className="main-detail container">
      <div className="detail-card">
        <img
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          alt=""
        />
        <div className="detail-card-info">
          <h2>Name</h2>
          <h3>{hero.name}</h3>
          {hero.description ? (
            <>
              <h2>Description</h2>
              <p>{hero.description}</p>
            </>
          ) : null}
          <ul>
            <h2>Series</h2>
            {hero.series.items.map((s) => (
              <p key={Math.random() * 1000}>{s.name}</p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
