import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Board from "./components/Board";
import Header from "./components/Header";
import Card from "./components/Card";
import MainContentContainer from "./components/MainContentContainer";

// import Footer from "./components/Footer";

export default function App() {

//function for likes count

//function to update the board

//function for updating the card

  // run on component initialization
  //axios get request
  useEffect(() => {
    runAxios();
  }, []);
  async function runAxios() {
    console.log("runAxios()");
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log("error:", error);
        console.log("error response:", error.response);
      });
  }

  return (
    <div>
      <Header />
      <MainContentContainer />
      {/* <Board /> */}
      <Card />
      {/* <Footer /> */}
    </div>
  );
}

//functions that will communicate with back-end

//post(URL), post info (title,owner,

//get(URL--use above code), get boards

//post(URL), post info for cards

//get(URL), get card info
