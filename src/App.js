import logo from './logo.svg';
import './App.css';

import BoardList from './components/BoardList.js';
import Board from './components/Board.js';
import NewBoard from './components/NewBoard.js';
import DeleteAllButton from './components/DeleteAllButton';
import Card from "./components/Card.js"

function App() {
  return (

    <section>
      <header className='header'>
        <h1>Inspo Board!</h1>
      <Board url='https://hacky-saac-inspiration-board.herokuapp.com/boards/' />
      </header>
      <DeleteAllButton />
    </section>
  );
}

export default App;
