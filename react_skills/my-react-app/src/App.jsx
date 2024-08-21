import React, { useState } from 'react';
import NavBar from './components/navbar';
import "./App.css";

const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    backgroundColor: "lightgreen",
  },
  {
    name: "charmander",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    backgroundColor: "orange",
  },
  {
    name: "squirtle",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    backgroundColor: "lightblue",
  },
  {
    name: "pikachu",
    imgSrc: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    backgroundColor: "yellow",
  },
  {
    name: "mew",
    imgSrc: "https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/151.png",
    backgroundColor: "pink",
  },
];


function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  return (
    <div className="App">
      <NavBar pokemonList={pokemonList} setPokemonIndex={setPokemonIndex} />
      <div
        className="card"
        style={{ backgroundColor: pokemonList[pokemonIndex].backgroundColor }}
      >
        {pokemonList[pokemonIndex].imgSrc && (
          <img
            src={pokemonList[pokemonIndex].imgSrc}
            alt={pokemonList[pokemonIndex].name}
            className="card-img"
          />
        )}
        <div>{pokemonList[pokemonIndex].name}</div>
      </div>
    </div>
  );
}

export default App;
