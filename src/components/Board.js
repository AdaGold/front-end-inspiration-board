import { React, useEffect, useState } from 'react';
import Card from './Card.js';
import NewCard from './NewCard.js';
import propTypes from 'prop-types';
import axios from 'axios';

const fakeBoard = {
    'name':'board',
    'username': 'me',
    'quote': ['none']
}
const defaultError = '';
const Board = (fakeboard) => {
    // get board by ID based on API call
    // reafactor using context?
    const [ boardInfo, setBoardInfo ] = useState(fakeboard);
    const [ error, setError ] = useState(defaultError);

    return(
        <div className='board'>
            <h3>{boardInfo.title}</h3>
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
}

export default Board;