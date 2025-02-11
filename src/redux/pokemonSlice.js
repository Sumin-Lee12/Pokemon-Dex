import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pokemonList: [], // 전체 포켓몬 리스트
  selectedPokemon: [], // 선택된 포켓몬 리스트 (배열로 변경)
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemonList: (state, action) => {
      state.pokemonList = action.payload;
    },
    setSelectedPokemon: (state, action) => {
      state.selectedPokemon = action.payload;
    },
    removePokemon: (state, action) => {
      state.selectedPokemon = state.selectedPokemon.filter(
        (pokemon) => pokemon.id !== action.payload
      );
    },
    addPokemon: (state, action) => {
      state.selectedPokemon.push(action.payload);
    },
  },
});

export const { setPokemonList, setSelectedPokemon, removePokemon, addPokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
