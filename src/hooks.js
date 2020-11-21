import { useState } from "react";

function useFlipCard(initState = true) {
    const [isFacingUp, setIsFacingUp] = useState(initState);

    const toggle = () => {
        setIsFacingUp(curr => !curr);
    };

    return [isFacingUp, toggle];
}

export {useFlipCard};
