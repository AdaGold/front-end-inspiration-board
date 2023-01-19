import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
// import Board from "./components/Boards/Board";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardSection from "./components/Cards/CardSection";
import CreateNewBoard from "./components/Boards/CreateNewBoard";
import Card from "./components/Cards/Card";


export default function App() {
  const [boardData, setBoardData] = useState([]);


  //run on component initialization
  //axios get request tester code
  useEffect(() => {
    runAxios();
  }, []);
  async function runAxios() {
    console.log("runAxios()");
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}`)
      .then((response) => {
        console.log("response data", response.data);
        setBoardData(response.data);
      })
      .catch((error) => {
        console.log("error response:", error.response);
      });
  }
  
  return (
    <>
      <Header />
      <div>
        <div className="top-section">
          <CreateNewBoard />
          <CardSection />
        </div>
        <Footer />
      </div>
    </>
  );
}

//functions that will communicate with back-end

//post(URL), post info (title,owner,

//get(URL--use above code), get boards

//post(URL), post info for cards

//get(URL), get card info


