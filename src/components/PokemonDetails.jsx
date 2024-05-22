import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { PokemonCard } from "./PokemonCard";

export const PokemonDetails = () => {
  const param = useParams();
  const pokemonDetail = useLoaderData();
  return <PokemonCard pokemon={pokemonDetail} />;
};
