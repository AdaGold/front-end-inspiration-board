import { useState } from 'react';
import './App.css';
import BoardsList from './components/BoardsList';
import Board from './components/Board';

function App() {
  const [selectedBoard, setSelectedBoard] = useState(1);

  return (
    <div className="App">
      <BoardsList selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
      <Board selectedBoard={selectedBoard} />
    </div>
  );
}

export default App;
