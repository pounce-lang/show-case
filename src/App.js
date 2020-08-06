import React from 'react';
import logo from './pounce07.png';
// import { Examples } from './Tabs'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { IntroPounces } from "./introduction/IntroPounces";
import { CorePounces } from "./coreWords/CorePounces";
import CanvasPounces from './basicCanvas/CanvasPounces';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ marginBottom: 0 }}><img src={logo} alt="logo" /> Pounce Sampler</h1>
        <p>A catalog of example Pounce programs.</p>
      </header>
      <Router>
        <nav className="tabs__list">
          <Link className="tab" to="/">Introduction</Link>
          <Link className="tab" to="/core">Core Words</Link>
          <Link className="tab" to="/canvas">Canvas</Link>
          <Link className="tab" to="/audio">Audio</Link>
        </nav>
        <Routes>
          <Route path="/" element={<IntroPounces />} />
          <Route path="/core" element={<CorePounces />} />
          <Route path="/canvas" element={<CanvasPounces />} />
          <Route path="/audio" element={<h1>Work in progress</h1>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
