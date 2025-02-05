import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useState } from "react";

const Dex = () => {
  const navigate = useNavigate();
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  console.log(setSelectedPokemon);

  return (
    <>
      <div className="dexStyle">
        <Dashboard selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}/>
        <PokemonList selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon} />
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        메인(홈)으로 이동
      </button>
    </>
  );
};

export default Dex;
