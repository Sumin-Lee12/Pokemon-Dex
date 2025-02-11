import React from "react";
import MOCK_DATA from "./MOCK_DATA";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPokemon } from "../redux/pokemonSlice";

const PokemonList = () => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector((state) => state.pokemon.selectedPokemon) || [];

  const addPokemon = (pokemon) => {
    if (selectedPokemon.length >= 6) {
      alert("최대 6개까지만 선택할 수 있습니다!");
      return;
    }
    if (selectedPokemon.find((p) => p.id === pokemon.id)) {
      alert("이미 선택된 포켓몬입니다!");
      return;
    }
    dispatch(setSelectedPokemon([...selectedPokemon, pokemon]));
  };

  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/dex/card-detail?id=${id}`);
  };

  return (
    <div className="pokemon-list">
      {MOCK_DATA.map((pokemon) => {
        return (
          <div
            key={pokemon.id}
            onClick={() => handleCardClick(pokemon.id)}
            className="card"
          >
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <h2>{pokemon.korean_name}</h2>
            <p>00{pokemon.id}</p>
            <button
              className="card-btn"
              onClick={(e) => {
                e.stopPropagation();
                addPokemon(pokemon);
              }}
            >
              추가
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PokemonList;
