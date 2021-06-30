import { React, useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';

import NewBoard from './NewBoard.js';

const boardListArray = [
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

    // a list of board names (not boards!) to be used to select a board to display.
    // We'll pass the board id into the board display.
    const list = boardListArray.map((item) =>{
        const selectBoard = () => {
            // takes in ID and selects baord to render With Cards
            console.log('clicked')
        }
        return(
        <li id={item.id} onClickCallback={selectBoard} > {item.title}</li>
      )})


    return(
        <div className="board-list-container">
            <h2>Board List</h2>
            <ul>
                {list}
            </ul>
        </div>
        
    )
}

export default BoardList;