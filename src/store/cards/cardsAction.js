

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

export const turnedCardsCountPlus = () => {
    return {
        type: "TURNED_CARDS_COUNT_PLUS",
    }
}

export const turnedCardsCountClear = () => {
    return {
        type: "TURNED_CARDS_COUNT_CLEAR",
    }
}