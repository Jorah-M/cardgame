import { combineReducers } from 'redux'
import cardsReducer from './cards/cardsReducer'
import gameStateReducer from './gameState/gameStateReducer'

export const rootReducer = combineReducers({
    cards: cardsReducer,
    gameState: gameStateReducer,
})