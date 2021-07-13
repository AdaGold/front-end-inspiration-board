import React from 'react';
import Card from './Card'

const CardList = ({ cards, deleteCard, likeCard }) => {
    return (
        <section className="cards-list">
            {cards && cards.length > 0 &&
                cards.map(card => {
                    return (
                        <Card key={card.card_id} card={card} deleteCard={deleteCard} likeCard={likeCard} />
                    )
                })
            }
        </section>
    )
}

export default CardList;