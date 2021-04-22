import React, { useEffect, useState } from "react";
import useAsyncError from "../../hooks/useAsyncError";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  const throwError = useAsyncError();

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemonsss")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
            throwError(new Error("Asynchronous error"));
        }
      })
      .then((data) => setPokemons(data.results))
      .catch((error) => {
        throwError(new Error("Asynchronous error"));
      });
  });

  return (
    <ul>
      {pokemons.map((pokemon) => (
        <li key={pokemon.name}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default Pokemons;
