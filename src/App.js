import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Components
import Header from './components/Header';
import Boards from './components/Boards';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Boards />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;