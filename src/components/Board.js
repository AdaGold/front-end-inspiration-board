import React from 'react';
import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup';




const Board = ({ board }) => {
    return (
        <div className='board'>
            <ListGroup as="ul">
                <ListGroup.Item as="li">
                    {board.title}
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Board;