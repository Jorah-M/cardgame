import React from 'react';
import PropTypes from 'prop-types'
import './GameCard.css'
import BackSide from '../../images/shirt.png'

import { useSelector } from 'react-redux'

const VacancyCard = ({ onClick, index }) => {
    const card = useSelector((state) => state.cards.cards[index])
    const isFlipped = useSelector((state) => state.cards.cards[index].isFlipped)
    const isExcluded = useSelector((state) => state.cards.cards[index].isExcluded)

    return (
        <div className={'game-card-wrapper'}>
            <div className={'game-card'} onClick={onClick}>
                <div className={`${isFlipped ? 'game-card__front' : 'game-card__front game-card__front-rotation'} ${isExcluded ? 'game-card__hide' : ''}`}>
                    <img src={card.url} alt={card.name} />
                </div>
                <div className={`${isFlipped ? 'game-card__back' : 'game-card__back game-card__back-rotation'} ${isExcluded ? 'game-card__hide' : ''}`}>
                    <img src={BackSide} alt={'back side'} />
                </div>
            </div>
        </div>
    )
}

VacancyCard.propTypes = {
    onClick: PropTypes.func,
    index: PropTypes.number,
}

export default VacancyCard;