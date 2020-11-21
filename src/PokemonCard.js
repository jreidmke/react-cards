import React, { useState } from "react";
import "./PokemonCard.css";

/* Renders a single pokemon card. */
function PokemonCard({ front, back, name, stats }) {//setting up props
  const [isFacingUp, setIsFacingUp] = useState(true);//setting up isFacingUp state to true
  const flipCard = () => {//simple function reflips card
    setIsFacingUp(isUp => !isUp);
  };
  return (
    <div onClick={flipCard} className="PokemonCard Card">{/**so if you click the card, it flips! and shows Pikachu's back. */}
      {isFacingUp ? ( /**if facing up is true, the fron of the card displays */
        <div className="PokemonCard-front">
          <img src={front} alt={`{name} front`} />
          <div>
            <p className="PokemonCard-name">{name}</p>
            <ul className="PokemonCard-stats">
              {stats.map(stat => (
                <li key={stat.name}>
                  <em>{stat.name}</em>: {stat.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : ( /**ELSE, it shows the back */
        <div className="PokemonCard-back">
          <img src={back} alt={`{name} back`} />
        </div>
      )}
    </div>
  );
}

export default PokemonCard; //then ya export it. i'm guessing this badboy is imported by PokeDex.js. think the capitalization is wrong there
