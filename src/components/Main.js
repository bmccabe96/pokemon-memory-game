import React, { useState, useEffect} from "react";
import PokemonList from "./pokemon/PokemonList";
import { Score } from "./Score";
import { shuffle } from "../utils";

const Main = () => {

  const [pokemons, setPokemons] = useState([]);
  const [selectedPokemons, setSelectedPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);


  useEffect(()  => {
    const loadCards = async () => {
      setPokemons(await fetchPokemons(12));
    }
    loadCards();
  }, []);

  const handleClick = (id, name) => {
    let alreadyClicked = false;
    for(let i=0; i<selectedPokemons.length; i++) {
      if(id === selectedPokemons[i].id) {
        alreadyClicked = true;
      }
    }

    if (alreadyClicked) {
      if (currentScore > bestScore) {
        setBestScore(currentScore);
        setCurrentScore(0);
        setSelectedPokemons([]);
      }
    } else {
      const newSelectedPokemons = [...selectedPokemons, {'id': id, 'name': name}];
      setSelectedPokemons(newSelectedPokemons);
      setCurrentScore(currentScore + 1);
    }
    const copyOfPokemons = shuffle([...pokemons]);
    setPokemons(copyOfPokemons);

  }

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
    return shuffle(pokemons);
  }

  return (
    <div className="main-content">
      <div className="score-row">
        <Score type="current" score={currentScore}/>
        <Score type="best" score={bestScore}/>
      </div>
      <PokemonList pokemons={pokemons} handleClick={handleClick}/>
    </div>
  )
}

export default Main;

//TEST POKEMON FOR CARD:
//bulbasaur
//1
//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
