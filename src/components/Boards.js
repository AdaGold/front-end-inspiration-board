import Board from './Board';
import Card from 'react-bootstrap/Card';
// import { useLocation } from 'react-router-dom'
import Button from './Button';

const Boards = ({ boards, onAdd, showAdd }) => {
    // const location = useLocation()

    return (
        <div style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
            <Card border="info" style={{ width: '30rem'}}>
                <Card.Header>
                    <p>Boards</p>
                    <Button 
                        color={showAdd ? 'red' : 'green'}
                        text={showAdd ? 'Close' : 'Add'}
                        onClick={onAdd}
                    />
                </Card.Header>
                <Card.Body>
                    {boards.map((board, index) => (
                        <Board key={index} board={board} />
                    ))}
                </Card.Body>   
            </Card>
        </div>
    )
}

export default Boards