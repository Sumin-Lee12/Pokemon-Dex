import { useNavigate } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import { useDispatch } from "react-redux";
import { setSelectedPokemon } from "../redux/pokemonSlice";

const Dex = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 필요한 상태 관리 (예: selectedPokemon) 등을 여기서 처리할 수 있습니다.
  const handleSelectPokemon = (pokemon) => {
    dispatch(setSelectedPokemon(pokemon));  // 상태 업데이트
  };

  return (
    <>
      <div className="dexStyle">
        <Dashboard />
        <PokemonList onSelectPokemon={handleSelectPokemon} />
      </div>
      <button
        onClick={() => {
          navigate("/"); // 메인 페이지로 이동
        }}
      >
        메인(홈)으로 이동
      </button>
    </>
  );
};

export default Dex;
