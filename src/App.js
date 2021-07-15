import { useState, useEffect } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components
import Header from './components/Header';
import Boards from './components/Boards';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  const [boards, setBoards] = useState([])

  useEffect(() => {
    const getBoards = async () => {
      const boardsFromServer = await fetchBoards()
      setBoards(boardsFromServer)
    }

    getBoards()
  }, [])

  // Fetch Boards
  const fetchBoards = async () => {
    const res = await fetch('https://inspo--board.herokuapp.com/boards')
    const data = await res.json()

    return data
  }

  // Fetch Board
  const fetchBoard = async (id) => {
    const res = await fetch(`https://inspo--board.herokuapp.com/boards/${id}`)
    const data = await res.json()

    return data
  }

  return (
    <div className="App">
      <Header />
      <Boards boards={boards} />
      <Route
          path='/'
          exact
          render={(props) => (
            <>
              {boards.length > 0 ? (
                <Boards
                  boards={boards}
                />
              ) : (
                'No Boards To Show'
              )}
            </>
          )}
        />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;