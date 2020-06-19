import React from 'react';
import logo from './pounce07.png';
import { Examples } from './Tabs'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{marginBottom: 0}}><img src={logo} alt="logo" /> Pounce Sampler</h1>
        <p>A catalog of example Pounce programs.</p>
      </header>
<Examples>

</Examples>
    </div>
  );
}

export default App;
