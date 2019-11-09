import React from 'react';
import Pokemon from './components/Pokemon';
import Pokelist from './components/Pokelist';

function App() {
  return (
    <div className="App">
      <Pokemon url="https://pokeapi.co/api/v2/pokemon/150" />
      <Pokelist />
    </div>
  );
}

export default App;
