import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

const Card = (props) => {
    const likes = {
        id: props.id,
        value: props.value
    }


    return(
        <button className="card" onClick={() => props.onClickCallback(likes)}>
            {props.value}
        </button>
    )
    // state: passed back to board?
    // number of upvotes
    // delete
    
    // cards passed as props or Context? 
}

export default Card;