import React from 'react'

const Card = ({ card, deleteCard, likeCard }) => {
    const onDeleteCard = () => {
        deleteCard(card.id)
    }

    const onLikeCard = () => {
        likeCard(card)
    }
    return (
        <div className="card">
               <div className="hearts">
            <p>{card.message}</p>
            <div className="heart">♡</div>
                            <div className="heart">♡</div>
                            <div className="heart">♡</div>
                            <div className="heart">♡</div>
            </div>
            <div className="card-footer">
                <span>{card.likes_count} 💕</span>
                <span onClick={onLikeCard} className="pointer card-script">+1</span>
                <span className="pointer" onClick={onDeleteCard}>🗑️</span>
            </div>
        </div>
    )
}

export default Card
