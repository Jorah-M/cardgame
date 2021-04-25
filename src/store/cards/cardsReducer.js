import initialState from '../initialState';


export default function cardsReducer(state = initialState.cardsState, action) {
    switch(action.type) {

        case "ADD_CARDS": {
            return {
                ...state,
                cards: [state.cards]
            }
        }

        case "TURN_CARD": {
            return {
                ...state,
                cards:
                    state.cards.map((card, i) => {
                        if (i === action.payload) {
                            card.isTurned = true;
                            return card
                        } else {
                            return card
                        }
                    })
            }
        }

        case "TURN_ALL_CARDS": {
            return {
                ...state,
                cards: state.cards.map((card) => {
                    card.isTurned = false
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

        default: return state;
    }
}