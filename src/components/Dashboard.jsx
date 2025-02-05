import { useState } from 'react';
import PokemonList from './PokemonList';

const Dashboard = ({selectedPokemon, setSelectedPokemon}) => {

  const renderPokemonSlot = (index) => {
    return selectedPokemon[index] ? (
        <div key={selectedPokemon[index].id} className="card">
          <img src={selectedPokemon[index].img_url} alt={selectedPokemon[index].korean_name} />
          <h2>{selectedPokemon[index].korean_name}</h2>
          <p>00{selectedPokemon[index].id}</p>
          <button className="card-btn" onClick={() => DeletePokemonSlot(selectedPokemon[index].id)}>삭제</button>
        </div>
    ) : (
      '🎱'
    );
  };

  const DeletePokemonSlot = (id) => {
    const updatedSlots = selectedPokemon.filter((pokemon) => pokemon.id !== id)
    setSelectedPokemon(updatedSlots);
  }

  return (
    <div className='dashboard'>
      <h1 className='title'>나만의 포켓몬</h1>

      <div className='pokeball-list'>
        <div className='pokeballs'>{renderPokemonSlot(0)}</div>
        <div className='pokeballs'>{renderPokemonSlot(1)}</div>
        <div className='pokeballs'>{renderPokemonSlot(2)}</div>
        <div className='pokeballs'>{renderPokemonSlot(3)}</div>
        <div className='pokeballs'>{renderPokemonSlot(4)}</div>
        <div className='pokeballs'>{renderPokemonSlot(5)}</div>
      </div>

      {/* <PokemonList addPokemon={addPokemon} /> */}
    </div>
  )
}

export default Dashboard;