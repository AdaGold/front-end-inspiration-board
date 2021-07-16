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
      <section className='nav-flex-container'>
        <BoardsList selectedBoard={selectedBoard} setSelectedBoard={setSelectedBoard} />
        <SelectedBoardInfo selectedBoardId={selectedBoard} />
        <NewBoardForm setSelectedBoard={setSelectedBoard} />
      </section>
      <Board selectedBoardId={selectedBoard} />
    </div>
  );
}

export default App;
