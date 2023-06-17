import React, { useState } from "react";
import { Container } from "../components/Container";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { Grid } from "../components/Grid/Grid";
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
    <Container>
      <h1>MCU</h1>
      <SearchBar setter={setHeroes} />
      <Grid>{cards ? cards : ""}</Grid>
    </Container>
  );
};
