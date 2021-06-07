import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './GameContainer.css';
import GameCard from '../GameCard';
import { flipAllCards, flipCard, countClear, countIncrement, excludeCards } from "../../store/cards/cardsAction";
import { changeGameStage } from "../../store/gameState/gameStateAction";
import Modal from "../Modal";

const GameContainer = () => {
    let dispatch = useDispatch()
    let cards = useSelector((state) => state.cards.cards)
    let cardsCount = useSelector((state) => state.cards.count)
    let gameState = useSelector((state) => state.gameState.game)

    const onClickCard = (i) => {
        if (cards[i].isFlipped || cards[i].isExcluded) {
            //TODO kind of 'already flipped' alert
        } else if (cardsCount === 0) {
            dispatch(flipCard(i))
            dispatch(countIncrement())
        } else if (cardsCount === 1) {
            const flipped = cards.filter((card) => card.isFlipped)
            dispatch(flipCard(i))
            dispatch(countIncrement())
            if (flipped[0].pair === cards[i].pair) {
                setTimeout(() => {
                    dispatch(excludeCards(cards[i].pair))
                }, 1000)
            }
        }
    }

    useEffect(() => {
        if (cardsCount === 2) {
            setTimeout(() => {
                dispatch(flipAllCards())
                dispatch(countClear())
            }, 1000)
        }
    }, [cardsCount])

    useEffect(() => {
        const allExcluded = cards.filter((card) => !card.isExcluded)
        if (allExcluded.length === 0) {
            dispatch(changeGameStage('won'))
        }
    }, [cards])

    return (
        <div className={'game-grid'}>
            {
                cards.map((card, i) =>
                    <div key={card.id} onClick={() => onClickCard(i)}>
                        <GameCard index={i} />
                    </div>)
            }
            {gameState === 'won' ? <Modal title={'Поздравляю!'} content={'Ты справился. Уря!'} /> : null}
            {gameState === 'lost' ? <Modal title={'Вот незадача...'} content={`Пацан к успеху шел. Не фартануло, не повезло. \nПопробуй ещё разок!`}/> : null}
        </div>
    )
}

export default GameContainer;