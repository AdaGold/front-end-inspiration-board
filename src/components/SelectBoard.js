import React from "react";
import "../App.css";

export default function SelectBoard () { 
  return (
    <div class="select-board-menu">
      <h1 className="select-board-header">Pick Your Inspiration Board</h1>
      <select id = "dropdown">
        <option value="0">Why can't I figure this out</option>
        <option value="1">Puppies 🐕 </option>
        <option value="2">Icecream</option>
        <option value="3">I already failed my new years resolution</option>
        <option value="4">🎮 </option> 
    </select>
  </div>
  );
}

