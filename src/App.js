import './App.css';

import { React, useEffect, useState } from 'react';
import NewBoard from './components/NewBoard.js';
import BoardDisplay from './components/BoardDisplay.js';
import DeleteAllButton from './components/DeleteAllButton';
import axios from 'axios';

function App() {
  const [boards, setBoards] = useState([]);

  const boardsElements = boards.map((board) => {
    return (<li>
      <BoardDisplay board={board}></BoardDisplay>
    </li>)
  });

  useEffect(() => {
    axios.get("http://localhost:5000/boards", {
    }).then((response) => {
      setBoards(response.data);
    })
  }, []);


  return (

    <section>
      <header className='header'>
        <h1>Inspiration Board!</h1>
      </header>

      <h2>Boards</h2>
      <ol>
        {boardsElements}
      </ol>

      <NewBoard />
      <DeleteAllButton />
    </section>
  );
}

export default App;
