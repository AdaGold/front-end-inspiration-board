//this will just be how the card displays it will take props which will be the "message" from the database.
// card needs to be deleted, and update like
import React from 'react';

export const Card = (props) => {
    return <section>
        <p>{props.message}</p>
        <p>{props.likes_count}</p>
    </section>

};
