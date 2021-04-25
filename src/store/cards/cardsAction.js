

export const addCards = (cards) => {
    return {
        type: "ADD_CARDS",
        payload: { cards }
    }
}

export const flipCard = (cardIndex) => {
    return {
        type: "FLIP_CARD",
        payload: cardIndex
    }
}

export const flipAllCards = () => {
    return {
        type: "FLIP_ALL_CARDS",
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

export const excludeCards = (cardPair) => {
    return {
        type: "EXCLUDE_CARDS",
        payload: cardPair
    }
}