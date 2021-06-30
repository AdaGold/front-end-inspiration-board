import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

import NewBoard from './NewBoard.js';
const BoardList = [
    {
        "board_id": 1,
        "owner": "summer",
        "title": "summer's board"
    },
    {
        "board_id": 2,
        "owner": "summer",
        "title": "summer's board"
    }
]
const BoardList = () => {
    // state: from API call
    // generate list of boards from API call, depends on structure of API
    // add new Board function
    const selectBoard = () => {
        // takes in ID and selects baord to render With Cards
        console.log('clicked')
    }
    return(
        <div className="board-list-container">
            <h2>Board List</h2>
            <ul>
                <li onClick={() => {selectBoard()}}>Board</li>
            </ul>
        </div>
        
    )
}

export default BoardList;