import { useState, useEffect } from 'react';
import { BrowserRouter as Route } from 'react-router-dom';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from 'axios';

//Components
import Header from './components/Header';
import Boards from './components/Boards';
import Cards from './components/Cards';
import Footer from './components/Footer';
import AddBoard from './components/AddBoard';

function App() {
  const [showAddBoard, setShowAddBoard] = useState(false)
  const [boards, setBoards] = useState([])

  const getBoards = async () => {
    const boardsFromServer = await fetchBoards()
    setBoards(boardsFromServer)
  }

  useEffect(() => {

    getBoards()
  }, [])

  // Fetch Boards
  const fetchBoards = async () => {
    const res = await fetch('https://inspo--board.herokuapp.com/boards')
    const data = await res.json()

    return data
  }

  // Fetch Board
  // const fetchBoard = async (id) => {
  //   const res = await fetch(`https://inspo--board.herokuapp.com/boards/${id}`)
  //   const data = await res.json()

  //   return data
  // }

  // Add Board
  const addBoard = async (board) => {
    const res = await fetch('https://inspo--board.herokuapp.com/boards', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(board),
    })

    const data = await res.json()

    setBoards([...boards, data])
  }

  const deleteBoard = async (id) => {
    axios.delete(`https://inspo--board.herokuapp.com/boards/${id}`)
      .then(() => {
          getBoards()
      })
  }

  return (
    <div className="App">
      <Header />
      <Boards 
        onAdd={() => setShowAddBoard(!showAddBoard)}
        showAdd={showAddBoard}
        boards={boards} 
        onDelete={deleteBoard}
      />
      {showAddBoard && <AddBoard onAdd={addBoard}/>}
      <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddBoard && <AddBoard onAdd={addBoard} />}
              {boards.length > 0 ? (
                <Boards
                  boards={boards}
                  onDelete={deleteBoard}
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