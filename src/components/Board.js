import { React, useEffect, useState } from 'react';
import Card from './Card.js';
import NewCard from './NewCard.js';
import propTypes from 'prop-types';
import axios from 'axios';

const fakeBoard = {
        "board_id": 1,
        "owner": "summer",
        "title": "summer's board"
    }

const defaultError = '';
const Board = (fakeboard) => {
    // get board by ID based on API call
    // reafactor using context?
    const [ boardInfo, setBoardInfo ] = useState(fakeboard);
    const [ error, setError ] = useState(defaultError);

    if (boardInfo){
        return (
            <div className='board'>
                <h3>{boardInfo.name}</h3>
                <h4>{boardInfo.username}</h4>
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
    board_id: PropTypes.number,
    owner: PropTypes.string,
    title: PropTypes.func.isRequired
}

export default Board;