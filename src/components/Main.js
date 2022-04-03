import React, { useState, useEffect} from "react";

const Main = () => {

  const [pokemons, setPokemons] = useState([]);

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
    <div>
      {pokemons.map(pokemon => {
        return <div>{pokemon.name}</div>
      })}
    </div>
  )
}

export default Main;