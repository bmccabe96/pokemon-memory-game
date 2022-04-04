import React from "react";
import { Card } from "./Card";

const PokemonList = (props) => {
  const pokemons = props.pokemons;
  const handleClick = props.handleClick;
  const gameOver = props.isGameOver;

  return (
    <div className={gameOver ? "pokemon-list game-over" : "pokemon-list"}>
      {pokemons.map(pokemon => {
        return <Card name={pokemon.name} image={pokemon.image} id={pokemon.id} key={pokemon.id} handleClick={handleClick} />
      })}
    </div>
  )
}

export default PokemonList;