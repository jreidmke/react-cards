import React, { useState } from "react";
import backOfCard from "./back.png";
import {useFlipCard} from './hooks';
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) { //pretty simple stuff. props declared and back defaults to backOfCard (which is an imported image)
  const [isFacingUp, flip] = useFlipCard();
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={flip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
