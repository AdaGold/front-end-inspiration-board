import React from 'react';

const CardList = ({ cards }) => {
    return (
        <div>
            <h1>List of Card </h1>
            {cards && cards.length > 0 &&
                cards.map(card => {
                    return (
                        <p key={card.card_id}>{card.message}</p>
                    )
                })
            }
        </div>
    )
}

export default CardList;