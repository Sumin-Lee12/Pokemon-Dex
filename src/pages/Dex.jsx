import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useState } from "react";
import { PokemonContext } from "../context/PokemonContext";

const Dex = () => {
  const navigate = useNavigate();
  const [selectedPokemon, setSelectedPokemon] = useState([]);

  console.log(setSelectedPokemon);

  return (
    <PokemonContext.Provider
      value={{
        selectedPokemon: selectedPokemon,
        setSelectedPokemon: setSelectedPokemon,
      }}
    >
      <div className="dexStyle">
        <Dashboard />
        <PokemonList />
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        메인(홈)으로 이동
      </button>
    </PokemonContext.Provider>
  );
};

export default Dex;
