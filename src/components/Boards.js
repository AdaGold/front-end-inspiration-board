import Board from './Board'
import Card from 'react-bootstrap/Card';

const Boards = ({ boards }) => {
    return (
        <div style={{display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'}}>
            <Card border="info" style={{ width: '30rem'}}>
                <Card.Header>
                    <p>Boards</p>
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