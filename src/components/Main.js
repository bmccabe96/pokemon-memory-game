import React, { useState, useEffect} from "react";
import PokemonList from "./pokemon/PokemonList";

const Main = () => {

  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);

  useEffect(()  => {
    const loadCards = async () => {
      setPokemons(await fetchPokemons(12));
    }
    loadCards();
  }, []);

  const fetchPokemons = async (n) => {
    let pokemons = [];
    for (let i=1; i<=n; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}/`;
      const response = await fetch(url);
      const pokemon = await response.json();
      const id = pokemon.id;
      const name = pokemon.name;
      const image = pokemon.sprites.front_default;
      pokemons.push({ id, name, image, });
    }
    return pokemons;
  }

  return (
    <PokemonList pokemons={pokemons} />
  )
}

export default Main;

//TEST POKEMON FOR CARD:
//bulbasaur
//1
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
