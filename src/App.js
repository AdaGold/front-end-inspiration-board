import { useState, useEffect } from 'react';
import './App.css';
import InspirationApi from './api/inspirationApi';

import Board from './components/Board';

function App() {
  const [boards, setBoards] = useState()

  useEffect( async () => {
    const b = await new InspirationApi().getBoard();
    setBoards(b)
  }, [])

  return (
    <div className="App">
      { boards?.map(board => {
        return(
          <div>
            <p>{board.title}</p>
            <p>{board.owner}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;
