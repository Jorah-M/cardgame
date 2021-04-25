import initialState from '../initialState';


export default function cardsReducer(state = initialState.cardsState, action) {
    switch(action.type) {

        case "ADD_CARDS": {
            return {
                ...state,
                cards: [state.cards]
            }
        }

        case "FLIP_CARD": {
            return {
                ...state,
                cards:
                    state.cards.map((card, i) => {
                        if (i === action.payload) {
                            card.isFlipped = true;
                            return card
                        } else {
                            return card
                        }
                    })
            }
        }

        case "FLIP_ALL_CARDS": {
            return {
                ...state,
                cards: state.cards.map((card) => {
                    card.isFlipped = false
                    return card;
                })
            }
        }

        case "COUNT_INCREMENT": {
            return {
                ...state,
                count: state.count + 1
            }
        }

        case "COUNT_CLEAR": {
            return {
                ...state,
                count: 0
            }
        }

        case "EXCLUDE_CARDS": {
                return {
                    ...state,
                    cards:
                        state.cards.map((card) => {
                            if (card.pair === action.payload) {
                                card.isExcluded = true;
                                return card
                            } else {
                                return card
                            }
                        })
                }
            }

        default: return state;
    }
}