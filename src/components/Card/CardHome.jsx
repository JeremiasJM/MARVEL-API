import { Link } from "react-router-dom";

const CardHome = () => {
  return (
    <div className="card-home ">
      <h2>Sessions</h2>
      <section className="cards container ">
        <article className="card card--1">
          <div className="card__img"></div>
          <Link to={"characters"} className="card_link">
            <div className="card__img--hover"></div>
          </Link>
          <div className="card__info">
            <h3 className="card__title">Characters</h3>
            <span className="card__by">
              Description:{" "}
              <p className="card__author" title="author">
                it's an exciting opportunity to explore a full roster of
                characters from the Marvel world.
              </p>
            </span>
          </div>
        </article>

        <article className="card card--2">
          <div className="card__img"></div>
          <Link to={"comics"} className="card_link">
            <div className="card__img--hover"></div>
          </Link>
          <div className="card__info">
            <h3 className="card__title">Comics</h3>
            <span className="card__by">
              Description:{" "}
              <p className="card__author" title="author">
                On this occasion, we invite you to explore the exciting world of
                comics. Here you will find a list of comics that have left an
                indelible mark on history and the collective imagination{" "}
              </p>
            </span>
          </div>
        </article>
        <article className="card card--3">
          <div className="card__img"></div>
          <Link to={"mcu"} className="card_link">
            <div className="card__img--hover"></div>
          </Link>
          <div className="card__info">
            <h3 className="card__title">MCU</h3>
            <span className="card__by">
              Description:{" "}
              <p href="#" className="card__author" title="author">
                In this session you can find any character from the Marvel
                cinematic world
              </p>
            </span>
          </div>
        </article>
      </section>
    </div>
  );
};
export default CardHome;
