import React, { useState, useEffect} from "react";
import { Card } from "./Card";

const PokemonList = (props) => {
  const pokemons = props.pokemons;

  return (
    <div className="pokemon-list">
      {pokemons.map(pokemon => {
        return <Card name={pokemon.name} image={pokemon.image} key={pokemon.id} />
      })}
    </div>
  )
}

export default PokemonList;