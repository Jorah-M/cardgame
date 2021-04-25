import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './GameContainer.css';
import GameCard from '../GameCard';
import {turnAllCards, turnCard, countClear, countIncrement } from "../../store/cards/cardsAction";

const GameContainer = () => {
    let dispatch = useDispatch()
    let cards = useSelector((state) => state.cards.cards)
    let cardsCount = useSelector((state) => state.cards.count)

    const onClickCard = (i) => {
        if (cards[i].isTurned || cards[i].isExcluded) {
            //TODO kind of 'already turned' alert
        } else if (cardsCount < 2) {
            dispatch(turnCard(i))
            dispatch(countIncrement())
        }
    }

    useEffect(() => {
        if (cardsCount === 2) {
            setTimeout(() => {
                dispatch(turnAllCards())
                dispatch(countClear())
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