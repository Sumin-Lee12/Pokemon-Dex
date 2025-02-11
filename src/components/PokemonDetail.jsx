import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import MOCK_DATA from "./MOCK_DATA";
import styled from "styled-components";

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ffc497;
  
  display: flex;
  flex-direction: column;
  align-items: center;
`

const StBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
  gap: 50px;
  font-size: 24px;

  img {
    width: 250px;
  }

  h2 {
    margin-bottom: 20px;
    font-size: 50px;
    font-weight: 900;
  }
`


const StButton = styled.button`
  margin-top: 50px;
  padding: 10px 15px;
  font-size: 16px;

  border-radius: 10px;
  border: none;
  background-color: #f39751;
  color: #ffffff;
`

const PokemonDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");

  const pokemon = MOCK_DATA.find((p) => p.id === parseInt(id));

  if (!pokemon) {
    return <div>포켓몬 정보를 찾을 수 없습니다.</div>;
  }

  const navigate = useNavigate();

  return (
    <Body>
      <StBox className="pokemon-detail">
        <img src={pokemon.img_url} alt={pokemon.korean_name} />
        <h2>{pokemon.korean_name}</h2>
        <p>ID: {pokemon.types}</p>
        <p>{pokemon.description}</p>
      </StBox>
      <StButton onClick={() => navigate("/dex")}>뒤로가기</StButton>
    </Body>
  );
};

export default PokemonDetail;
