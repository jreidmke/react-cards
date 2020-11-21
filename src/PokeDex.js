import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import PokemonSelect from "./PokemonSelect"; //Pokemon select is a form i'm supposing
import PokemonCard from "./PokemonCard"; //I was rigtht! It imported here! OK.
import "./PokeDex.css";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, setPokemon] = useState([]); //set init pokeState to an empty array

  const addPokemon = async name => { //create addPokemon function to add Pokemon to pokeState
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${name}/`
    );
    setPokemon(pokemon => [...pokemon, { ...response.data, id: uuid() }]);//update pokeState to include new pokemon.
  };

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3> {/**First the form is imported */}
        <PokemonSelect add={addPokemon} /> {/**OK. so PokemonSelect form has a prop `add` that we use to pass in our function addPokemon. nothing too crazy here. I'm assuming when we look at the PokemonSelect form it will have some arguments passed into add. Let's peek.  */}
      </div>
      <div className="PokeDex-card-area">
        {pokemon.map(cardData => ( //then! they safe the map method for the render return! that's cool and makes sense
          <PokemonCard
            key={cardData.id}
            front={cardData.sprites.front_default}
            back={cardData.sprites.back_default}
            name={cardData.name}
            stats={cardData.stats.map(stat => ({
              value: stat.base_stat,
              name: stat.stat.name
            }))}
          />
        ))}
      </div>
    </div>
  );
}

export default PokeDex;
