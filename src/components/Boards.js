import Board from './Board';
import Card from 'react-bootstrap/Card';
// import { useLocation } from 'react-router-dom'
import Button from './Button';

const Boards = (props) => {
    console.log(props)
    return (
        <div style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
            <Card border="info" style={{ width: '30rem'}}>
                <Card.Header>
                    <p>Boards</p>
                    <Button 
                        color={props.showAdd ? 'red' : 'green'}
                        text={props.showAdd ? 'Close' : 'Add'}
                        onClick={props.onAdd}
                    />
                </Card.Header>
                <Card.Body>
                    {props.boards.map((board) => (
                        <Board 
                            key={board.board_id} 
                            board={board} 
                            onDelete={props.onDelete} 
                            onClick={props.onClick}
                        />
                    ))}
                </Card.Body>   
            </Card>
        </div>
    )
}

export default Boards