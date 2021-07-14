import { useState } from 'react';
import './App.css';
import BoardsList from './components/BoardsList';
import Board from './components/Board';

function App() {
  const [selectedBoard, setSelectedBoard] = useState();

  return (
    <div className="App">
      <BoardsList selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
      <Board />
    </div>
  );
}

export default App;
