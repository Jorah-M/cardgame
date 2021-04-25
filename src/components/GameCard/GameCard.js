import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import './GameCard.css'
import BackSide from '../../images/shirt.png'

import { useDispatch, useSelector } from 'react-redux'

const VacancyCard = ({ onClick, index }) => {
    const card = useSelector((state) => state.cards.cards[index])
    const isTurned =  useSelector((state) => state.cards.cards[index].isTurned)

    // console.log('card = ', card)

    // useEffect(() => {
    //     console.log('isTurned', isTurned)
    // }, [isTurned])

    return (
        <div className={'game-card-wrapper'}>
            <div className={'game-card'} onClick={onClick}>
                <div
                    className={isTurned ? 'game-card__front' : 'game-card__back'}>
                    <img src={isTurned ? card.url : BackSide} alt={card.name} />
                </div>
                {/*<div className={'game-card__front'}><img src={card.url} alt={card.name} /></div>*/}
                {/*<div className={'game-card__back'}><img src={BackSide} alt={'back side'} /></div>*/}
            </div>
        </div>
    )
}

VacancyCard.propTypes = {
    card: PropTypes.object,
    isTurned: PropTypes.bool,
    onClick: PropTypes.func,
    index: PropTypes.number,
}

export default VacancyCard;