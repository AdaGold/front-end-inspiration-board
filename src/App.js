import logo from './logo.svg';
import './App.css';
import BoardList from './components/BoardList.js';
import Board from './components/Board.js';
import DeleteAllButton from './components/DeleteAllButton';
import Card from "./components/Card.js"

function App() {
  return (
    <div>
      <BoardList />
      <Board />
      <Card />
      <DeleteAllButton />
    </div>
  );
}

export default App;
