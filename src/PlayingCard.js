import React, { useState } from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) { //pretty simple stuff. props declared and back defaults to backOfCard (which is an imported image)
  const [isFacingUp, setIsFacingUp] = useState(true);
  const flipCard = () => { //same method used in PokemonCard.js! i'm betting they will have us abstrat this. 
    setIsFacingUp(isUp => !isUp);
  };
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
