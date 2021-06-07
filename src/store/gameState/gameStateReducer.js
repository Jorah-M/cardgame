import initialState from '../initialState';

export default function gameStateReducer(state = initialState.gameState, action) {
    switch(action.type) {

        case "CHANGE_GAME_STAGE": {
            return {
                game: action.payload
            }
        }

        default: return state;
    }
}