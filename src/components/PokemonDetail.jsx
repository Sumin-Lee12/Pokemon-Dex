import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "./MOCK_DATA";

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));

  if (!pokemon) {
    return <div>포켓몬 정보를 찾을 수 없습니다.</div>;
  }

  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate("/dex")}>뒤로가기</button>
      <div className="pokemon-detail">
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <h2>{pokemon.korean_name}</h2>
        <p>ID: {pokemon.id}</p>
        <p>{pokemon.description}</p>
      </div>
    </>
  );
};

export default PokemonDetail;
