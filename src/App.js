import './App.css';
import NewBoardForm from './components/NewBoardForm';
const axios = require('axios');



function App() {

  // add new board, API call
  const addBoard = (title, owner) => {
    console.log("i'm in API")

    axios.post('/user', {
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




  return (
    <main>
      <h1>Create New Board</h1>
      <NewBoardForm addBoardCallback={addBoard}> </NewBoardForm>






    </main>
  );
}

export default App;
