import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import "./board.css"
import Card from './Card.js';
import NewCard from './NewCard.js';



const defaultError = '';
const Board = (fakeboard) => {
    // get board by ID based on API call

    const [ boardInfo, setBoardInfo ] = useState({
        "board_id": 1,
        "owner": "summer",
        "title": "summer's board"
    });
    const [ error, setError ] = useState(defaultError);

    // the conditional will change, but this is basic logic to show
    // a 'no board chosen' for when the user hasn't selected a board,
    // and to show the board once there's information about it in state. 
    if (boardInfo.board_id == 1){
        return (
            <div className='board'>
                <h3>{boardInfo.title}</h3>
                <h4>{boardInfo.owner}</h4>
                <div className='cards'>
                    <ul>
                        <li> Card </li>
                        <li> Card </li>
                    </ul>
                </div>
                <div className='new-card-form'>

                    <NewCard />
                </div>
            </div>
        );
    } else {
        return (<p> No Board Chosen</p>)
    }
    
}

Board.propTypes = {
    board_id: propTypes.number,
    owner: propTypes.string,
    title: propTypes.func.isRequired
}

export default Board;