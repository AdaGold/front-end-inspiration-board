import React from 'react'

const Card = ({ card, deleteCard, likeCard }) => {
    const onDeleteCard = () => {
        deleteCard(card.card_id)
    }

    const onLikeCard = () => {
        likeCard(card.card_id)
    }
    return (
        <div className="card">
            <p>{card.message}</p>
            <div className="card-footer">
                <span>{card.likes_count}💕</span>
                <span onClick={onLikeCard} className="card_emoji">+1</span>
                <span className="card_emoji" onClick={onDeleteCard}>🗑️</span>
            </div>
        </div>
    )
}

export default Card
