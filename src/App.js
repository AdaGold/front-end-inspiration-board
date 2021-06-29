import logo from './logo.svg';
import './App.css';
import BoardList from './components/BoardList.js';
import Board from './components/Board.js';
import DeleteAllButton from './components/DeleteAllButton';

function App() {
  return (
    <div>
      <BoardList />
      <Board />
      <DeleteAllButton />
    </div>
  );
}

export default App;
