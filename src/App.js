import { useState } from 'react';
import './App.css';
import BoardsList from './components/BoardsList';
import Board from './components/Board';
import SelectedBoardInfo from './components/SelectedBoardInfo';
import NewBoardForm from './components/NewBoardForm';

function App() {
  const [selectedBoard, setSelectedBoard] = useState();

  return (
    <div className="App">
      <BoardsList selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
      <NewBoardForm setSelectedBoard={setSelectedBoard} />
      <SelectedBoardInfo selectedBoard={selectedBoard} />
      <Board selectedBoardId={selectedBoard?.id} />
    </div>
  );
}

export default App;
