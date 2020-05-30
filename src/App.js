import React from 'react';
import logo from './pounce05.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<h1>        <img src={logo} alt="logo" /> Pounce show-case</h1>
      </header>


      <div className="Feature-parent">
      <div className="Feature-child" >
      A
      </div>
      <div className="Feature-child" >
      B
      </div>
      <div className="Feature-child" >
      C
      </div>
      <div className="Feature-child" >
      D
      </div>
      </div>
    </div>
  );
}

export default App;
