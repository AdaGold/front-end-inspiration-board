import React from 'react';
import '../App.css';
import ListGroup from 'react-bootstrap/ListGroup';
import {FaTrash} from 'react-icons/fa'




const Board = ( props ) => {
    return (
        <div className='board'>
            <ListGroup as="ul">
                <ListGroup.Item as="li">
                    {props.board.title}
                    <FaTrash 
                        className='alignright' 
                        style={{color:'red', cursor: 'pointer'}} 
                        onClick={()=> props.onDelete(props.board.board_id)}
                    />
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}

export default Board;