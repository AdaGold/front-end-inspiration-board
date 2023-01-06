import React from "react";
import PropTypes from "prop-types";

//start with post component for connecting to backend
//PROPS
//createNewBoard
//STATE
//title, owner

const Board = (props) => {
  // console.log(props);
  return (
      <div className="boards">
        <h1>BOARD</h1>
        <section>
          <h2>id={props.id}</h2>
          <h2>title={props.title}</h2>
          <h2>owner={props.owner}</h2> 
        </section>
      </div>
    )
  };

Board.propTypes = {
  id: PropTypes.number,
  owner: PropTypes.string,
  title: PropTypes.string,
};

export default Board;

