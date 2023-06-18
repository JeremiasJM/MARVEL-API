import React, { useRef } from "react";

import { fetchHeroes } from "../../utils/utils";

export const SearchBar = ({ setter }) => {
  let input = useRef("");

  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if (value === "") return;

    try {
      let heroes = await fetchHeroes(value);
      setter(heroes);
    } catch (err) {
      return console.error(err);
    }
  };
  return (
    <form className="form-mcu">
      <input
        className="input"
        type="text"
        placeholder="Search Characters"
        ref={input}
      />
      <button onClick={handleClick}>Search</button>
    </form>
  );
};
