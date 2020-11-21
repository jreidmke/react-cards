import { useState } from "react";
import axios from "axios";

function useFlipCard(initState = true) {
    const [isFacingUp, setIsFacingUp] = useState(initState);

    const toggle = () => {
        setIsFacingUp(curr => !curr);
    };

    return [isFacingUp, toggle];
}

function useAxios(initState = []) {
    const [cards, setCards] = useState(initState);
    const addRespData = async() => {
        const resp = await axios.get(`https://deckofcardsapi.com/api/deck/new/draw/`);
        setCards(data => [...data, resp.data]);
    }
    const clearResponses = () => setResponses([]);
    return [responses, addRespData, clearResponses];

}

export {useFlipCard, useAxios};
