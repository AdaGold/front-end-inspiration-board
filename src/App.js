import "./App.css";
import BoardForm from "./components/BoardForm";
import { useState } from "react";
import React from "react";
import Select from "react-select";

function App() {
  const [BoardData, setBoardData] = useState([]);
  const [Options, setOptions] = useState([]);

  const addBoardData = (newBoard) => {
    const newBoardList = [...BoardData];
    const optionsList = [...Options];

    newBoardList.push({
      title: newBoard.title,
      owner: newBoard.owner,
    });
    optionsList.push({
      value: "Title",
      label: newBoard.title,
      bgColor: "#da3b01", // background color of each title in select
      color: "#fAf", // text color of each title in select
    });
    setBoardData(newBoardList);
    setOptions(optionsList);
  };
  // Adding to the styles object to use as a prop, this allows us to "style" our dropdown ( <select>) this is built in
  const styles = {
    option: (provided, state) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: state.data.color,
      backgroundColor: state.data.bgColor,
      fontSize: state.selectProps.myFontSize,
    }),
  };
  // is this 'push' pushing our data from BoardForm.js
  //            into the empty state list?
  console.log([BoardData, setBoardData]);
  console.log(addBoardData);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BoardForm addBoard={addBoardData}></BoardForm>
          <Select options={Options} styles={styles} />
        </div>
      </header>
    </div>
  );
}

export default App;
