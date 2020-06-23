import React from 'react';
import './PokemonList.css';

const PokemonList = (props) => {
    const {
        fetchStatus,
        pokemonList,
        fetchError
    } = props;

    if (fetchStatus === 'IDLE' || fetchStatus === 'STARTED') {
        return (
          <div className="pokemon-list">
            Loading...
          </div>
        )
      }

      if (fetchStatus === 'SUCCEEDED') {
        return (
          <div className="pokemon-list">
            <pre>
              {pokemonList.map(pokemon => (
                  <div className="pokemon-card">
                      <h1>{ pokemon.name.english }</h1>
                      <h2>{ pokemon.name.japanese }</h2>
                  </div>
              ))}
            </pre>
          </div>
        )
      }

      // ERROR
      return (
        <div className="pokemon-list">
          Sorry, error occurred:

          <pre>
            {fetchError}
          </pre>
        </div>
      );
};

export default PokemonList;