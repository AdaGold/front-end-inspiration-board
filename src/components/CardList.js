import React from 'react';
import Card from './Card'
import NewCard from './NewCard'
const CardList = ({ cards, deleteCard, likeCard, createCard }) => {
    return (
        <section className="cards-list">
            <NewCard createCard={createCard} />
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