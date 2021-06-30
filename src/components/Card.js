//this will just be how the card displays it will take props which will be the "message" from the database.
// card needs to be deleted, and update like
import React from 'react';

export const Card = (props) => {

    // state of like that will come from databse

    // callbackfunction
    // call addlike
    // and add 1 to state

    return <section className="card">
        <p>{props.message}</p>
        <p>likes: state</p>
        <p className="likeButton">💕</p>
        <p className="deleteButton">🗑</p>
    </section>
};