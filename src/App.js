import './App.css';
import NewBoardForm from './components/NewBoardForm';
import NewCardForm from './components/NewCardForm';

const axios = require('axios');



function App() {

  // add new board, API call
  const addBoard = (title, owner) => {
    console.log("i'm in API")

    axios.post('/boards', {
      title: title,
      owner: owner
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  const addCard = (message) => {
    console.log("i'm in API")

    axios.post('/cards', {
      message: message,
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }





  return (
    <main>
  
      <NewBoardForm addBoardCallback={addBoard}> </NewBoardForm>
      <NewCardForm addCardCallback={addCard}></NewCardForm>






    </main>
  );
}

export default App;
