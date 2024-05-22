import React from "react";

export const PokemonCard = ({ pokemon }) => {
  return (
    <article>
      <img draggable="false" src={pokemon.image} alt="affiche d'un pokémon" />
      <h1>{pokemon.name}</h1>
    </article>
  );
};
