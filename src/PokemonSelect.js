import React, { useState } from "react";
import pokemonList from "./pokemonList";
import { choice } from "./helpers";

/* Select element to choose from common pokemon. */
function PokemonSelect({ add, pokemon = pokemonList })//notice that the props have been set and pokemon has a defaultProp of pokemonList imported above {
  const [pokeIdx, setPokeIdx] = useState(0);//first the pokeIdx is set to 0. let's see where this comes in handy.
  const handleChange = evt => {//pretty basic handleChange function right here.
    setPokeIdx(evt.target.value);//sets the pokeIdx state to whatever the value returned from the select form is.
  };

  return (
    <div>
      <select onChange={handleChange}>
        {pokemon.map((p, idx) => (
          <option key={idx} value={idx}>
            {p}
          </option>
        ))}
      </select>
      <button onClick={() => add(pokemon[pokeIdx])}>Catch one!</button>
      <button onClick={() => add(choice(pokemon))}>I'm feeling lucky</button>
    </div>
  );
}

export default PokemonSelect;
