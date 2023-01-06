import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Board from "./components/Board";
import NewBoard from "./components/NewBoardForm";
import Header from "./components/Header";
import Card from './components/Card'
// import Footer from "./components/Footer";

export default function App() {
  // run on component initialization
  useEffect(() => {
    runAxios();
  }, []);

  async function runAxios() {
    console.log("runAxios()");
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/boards`)
      .then((response) => {
        console.log(response.data);
      });
  }

  return (
    <div>
      <Header />
      <NewBoard />
      <Board id={123} owner="maggie" title="something inspirational" />
      <Card />
      {/* <Footer /> */}
    </div>
  );
}
