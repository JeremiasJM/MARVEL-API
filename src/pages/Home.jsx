import React from "react";
import CardHome from "../components/CardHome/CardHome";

export const Home = () => {
  return (
    <>
      <main className="home-main ">
        <div className="main-container ">
          <div className="container">
            <h1 className="h1-home">
              CREATE AWESOME STUFF WITH THE WORLD'S GREATEST COMIC API
            </h1>
            <p className="p-home">
              The Marvel Comics API allows developers everywhere to access
              information about Marvel's vast library of comics—from what's
              coming up, to 70 years ago.
            </p>
            <a
              href="https://developer.marvel.com/"
              target="_blank"
              className="btn-home"
            >
              Get Started
            </a>
          </div>
        </div>
        <img
          src="https://cdn.marvel.com/u/prod/marvel/i/mg/8/e0/52bdf830aa094.jpg"
          alt=""
        />
      </main>
      <CardHome />
    </>
  );
};
