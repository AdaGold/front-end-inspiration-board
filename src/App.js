import logo from './logo.svg';
import './App.css';
import BoardForm from './components/BoardForm';
import {useState} from 'react'
import React from 'react';
function App() {
  const [formFields, setFormFields] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <BoardForm state={formFields}setFormFields={setFormFields}></BoardForm>
        </div>
      
      </header>
    </div>
  );
}

export default App;
