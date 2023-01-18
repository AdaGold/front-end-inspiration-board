import React, { useState } from "react";
import PropTypes from "prop-types";
import Cards from "./components";

const Board = (props) => {
  // pass

  // state == all cards created under this board
  // --> GET request from back-end API

  return (
    <div>
      <Cards text=//{text from create card}/>
    </div>
  );
};
