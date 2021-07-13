import React from 'react';
import Card from './Card'

const CardList = ({ cards, deleteCard,likeCard }) => {
    return (
        <div>
            <h1>List of Card </h1>
            {cards && cards.length > 0 &&
                cards.map(card => {
                    return (
                        <Card key={card.card_id} card={card} deleteCard={deleteCard} likeCard={likeCard} />
                    )
                })
            }
        </div>
    )
}

export default CardList;