import { useState, useEffect } from "react";
import axios from "axios";

function useFlipCard(initState = true) {
    const [isFacingUp, setIsFacingUp] = useState(initState);

    const toggle = () => {
        setIsFacingUp(curr => !curr);
    };

    return [isFacingUp, toggle];
}

function useAxios(localStorageKey, Url) {
    const [responses, setResponses] = useLocalStorage(localStorageKey);

    const addRespData = async (formatter = data => data, restOfUrl = "") => {
        const resp = await axios.get(`${Url}/${restOfUrl}`);
        setResponses(data => [...data, formatter(resp.data)]);
    }
    const clearResponses = () => setResponses([]);

    console.log("HEY")

    return [responses, addRespData, clearResponses];
}


function useLocalStorage(key, initialValue = []) {
    if (localStorage.getItem(key)) {
      initialValue = JSON.parse(localStorage.getItem(key));
    }
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value));
    }, [value, key]);

    return [value, setValue];
  }

export {useFlipCard, useAxios, useLocalStorage};
