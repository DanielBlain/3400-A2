import {useState} from 'react';
import Header from './Header';
import './App.css';

let potatoSalad = "<h2>Tesdfasting<h2>";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="App-main">
        {potatoSalad}
      </main>
    </div>
  );
}

export default App;
