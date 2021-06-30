//this will just be how the card displays it will take props which will be the "message" from the database.
// card needs to be deleted, and update like
import React from 'react';

export const Card = (props) => {
    return <section className="card">
        <p>{props.message}</p>
        <p>likes: {props.likes_count}</p>
        <p className="likeButton">💕</p>
        <p className="deleteButton">🗑</p>
    </section>
};