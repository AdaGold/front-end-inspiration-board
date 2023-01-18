import "./App.css";
import CreateBoard from "./components/CreateBoard";
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
      label: `${newBoard.title} by ${newBoard.owner}`,
      // bgColor: "#da3b01", // background color of each title in select
      color: "#696969", // text color of each title in select
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
  // is this 'push' pushing our data from CreateBoard.js
  //            into the empty state list?
  console.log([BoardData, setBoardData]);
  console.log(addBoardData);

/* ADD API CALL ON EVENT HANDLER:
    - When board is selected,  pull all cards associated to that board.

Q: Should this drop-down menu be its own component?
    */


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <CreateBoard addBoard={addBoardData}></CreateBoard>
          <Select options={Options} styles={styles} />
          {/* display board based on Select Options state
              --> requires GET request from Cards? */}
        </div>
      </header>
    </div>
  );
}

export default App;
