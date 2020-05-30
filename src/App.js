import React from 'react';
import logo from './pounce07.png';
import PounceCat from './PounceCat';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
<h1>        <img src={logo} alt="logo" /> Pounce catalog</h1>
      </header>


      <div className="Feature-parent">
      <div className="Feature-child" >
        <h3>Post-fix</h3>
        <p>Pounce is a post-fix language. Nouns come first followed by verbs. Adding two and two, the nouns are <code>2 2</code> followed by <code>+</code></p>
        <PounceCat pounceCode="2 2 +" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Fibinachi Numbers</h3>
        <p>Making a sequence of numbers on the stack by duplicating the top two elements of the stack (<code>dup2</code>) and adding them together. Repeat this n times.</p>
        <PounceCat pounceCode="0 1 [dup2 +] 5 times" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <PounceCat pounceCode="[2 *] [twice] def 21 twice" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <PounceCat pounceCode="[0 = [drop] [dup 1 - [*] dip fac] if-else] [fac] def  1 5 fac" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <PounceCat pounceCode="5 [dup 0 ==] [1 +] [dup 1 -] [*] linrec" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <PounceCat pounceCode="3 2 1 [a b c] [a a * b + c c * -] apply-with" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Quicksort</h3>
        <p>Given a list to sort, binary recursion <code>binrec</code> is used to process both sub lists made by <code>split&lt;</code></p>
        <PounceCat pounceCode="[6 3 8 4 5 7 2 9 1] [size 1 <=] [] [uncons split<] [concat] binrec" ></PounceCat>
      </div>
      </div>
    </div>
  );
}

export default App;
