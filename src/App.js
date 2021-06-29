import './App.css';
import NewBoardForm from './components/NewBoardForm';
const axios = require('axios');



function App() {

  // add new board, API call
  const addBoard = (boardData) => {
    console.log("i'm in API")
    const newBoard = {
      title: boardData.title,
      owner: boardData.owner
    }
    axios.post('{process.env.REACT_APP_BACKEND_URL}/boards`', newBoard) {

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
