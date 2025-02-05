import React, { useState } from "react";
import MOCK_DATA from "./MOCK_DATA";

const PokemonList = ({ selectedPokemon, setSelectedPokemon }) => {

  console.log(selectedPokemon);
  const addPokemon = (pokemon) => {
    // console.log(selectedPokemon);

    if (selectedPokemon.length >= 6) {
      alert("최대 6개까지만 선택할 수 있습니다!");
      return;
    }
    if (selectedPokemon.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다!");
      return;
    }
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  return (
    <div className="pokemon-list">
      {MOCK_DATA.map((pokemon) => {
        return (
          <div key={pokemon.id} className="card">
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <h2>{pokemon.korean_name}</h2>
            <p>00{pokemon.id}</p>
            <button className="card-btn" onClick={() => addPokemon(pokemon)}>
              추가
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
