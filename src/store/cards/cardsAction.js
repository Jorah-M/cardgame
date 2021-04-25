

export const addCards = (cards) => {
    return {
        type: "ADD_CARDS",
        payload: { cards }
    }
}

export const turnCard = (cardIndex) => {
    return {
        type: "TURN_CARD",
        payload: cardIndex
    }
}

export const turnAllCards = () => {
    return {
        type: "TURN_ALL_CARDS",
    }
}

export const countIncrement = () => {
    return {
        type: "COUNT_INCREMENT",
    }
}

export const countClear = () => {
    return {
        type: "COUNT_CLEAR",
    }
}