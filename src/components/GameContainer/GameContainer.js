import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './GameContainer.css';
import GameCard from '../GameCard';
import {turnAllCards, turnCard, turnedCardsCountClear, turnedCardsCountPlus} from "../../store/cards/cardsAction";

const GameContainer = () => {
    let dispatch = useDispatch()
    console.log(useSelector((state) => state.cards))
    let cards = useSelector((state) => state.cards.cards)
    let cardsCount = useSelector((state) => state.cards.count)

    const onClickCard = (i) => {
        if (cards[i].isTurned) {
            //TODO kind of 'already turned' alert
        } else if (cardsCount < 2) {
            dispatch(turnCard(i))
            dispatch(turnedCardsCountPlus())
        }
    }

    useEffect(() => {
        if (cardsCount === 2) {
            setTimeout(() => {
                dispatch(turnAllCards())
                dispatch(turnedCardsCountClear())
            }, 1000)
        }
    }, [cardsCount])

    return (
        <div className={'game-grid'}>
            {
                cards.map((card, i) =>
                    <div key={card.id} onClick={() => onClickCard(i)}>
                        <GameCard index={i} />
                    </div>)
            }
        </div>
    )
}

export default GameContainer;