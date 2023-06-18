import React, { useState } from "react";
import { Container } from "../components/Mcu/Container";
import { SearchBar } from "../components/Mcu/SearchBar";
import { Grid } from "../components/Mcu/Grid";
import { CardMcu } from "../components/Card/CardMcu";

const IMAGE_SIZE = "portrait_fantastic";

export const Mcu = () => {
  const [heroes, setHeroes] = useState([]);
  let cards;

  if (heroes) {
    cards = heroes.map((hero) => (
      <CardMcu
        name={hero.name}
        id={hero.id}
        key={hero.id}
        thumbnail={`${hero.thumbnail.path}/${IMAGE_SIZE}.${hero.thumbnail.extension}`}
      />
    ));
  }
  return (
    <>
      <h2 className="h2-list">MCU</h2>
      <Container>
        <SearchBar setter={setHeroes} />
        <Grid>{cards ? cards : ""}</Grid>
      </Container>
    </>
  );
};
