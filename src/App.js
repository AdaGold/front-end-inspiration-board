/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardSection from "./components/Cards/CardSection";
import CreateNewBoard from "./components/Boards/CreateNewBoard";
import Card from "./components/Cards/Card";
import SelectBoard from "./components/Boards/SelectBoard";

function App() {
  const [boardData, setBoardData] = useState([]);
  const [currentBoard, setBoard] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [cards, setCards] = useState([]);
  const [cardLikes, setCardLikes] = useState();

  // When like card button is clicked, like card should be called, and increase like count should be called, and likesCount should be updated
  const likeCard = () => {
  axios.patch('${process.env.REACT_APP_BACKEND_URL}/cards/card_id')
  .then((response) => { 
    console.log("Card Liked");
  })
  .catch((error) => {
    console.log(error);
    console.log(error.response);
  })
  };

// //   const [likesCount, setLikesCount] = useState(0);
// //   const increaseLikes = () => {
// //     console.log('Like Count Increased!');
// //     setLikesCount(likesCount + 1);
// // };

  // }
  // This need to be finished so tht it deletes cards and updates w/ axios
  // const deleteCard = () => {
  //   // eslint-disable-next-line no-template-curly-in-string
  //   axios.delete('${process.env.REACT_APP_BACKEND_URL}/cards/card_id')
  //   .then((response) => {
  //     console.log("Card deleted")
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     console.log(error.response);
  //   })
  // };





  //get(URL--use above code), get boards
  // axios get request tester code
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        console.log("response data", response.data);
        setBoardData(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
        console.log("error response:", error.response);
      });
  }, []);

  //create a new board 
  const makeNewBoard = (enteredData) => {
    // console.log(enteredData);
    if (enteredData.title.length < 1 && enteredData.owner.length < 1) {
      alert("You must enter a title and owner")
    } else {
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/boards`, 
        {
          title: enteredData.title,
          owner: enteredData.owner,
        },
      )
      .then((response) => {
        console.log("response:", response);
        console.log("response data:", response.data);
        setBoardData([...boardData, response.data]);
      })
      .catch((error) => {
        console.log("error:", error);
      })
  }
};

 

  return (
    <>
      <Header />
      <div>
        <div className="top-section">
          <CreateNewBoard onSubmitBoard={makeNewBoard} />
          {/* <Board /> */}
          <CardSection />
          <SelectBoard boardData={boardData} />
        </div>
        <Footer />
      </div>
    </>
  );
}

//get(URL--use above code), get boards

//post(URL), post info for cards

//get(URL), get card info

//delete cards

//like cards


export default App;
