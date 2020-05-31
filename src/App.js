import React from 'react';
import logo from './pounce07.png';
import PounceCat from './PounceCat';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><img src={logo} alt="logo" /> Pounce Sampler</h1>
        <p>A catalog of example Pounce programs.</p>
      </header>


      <div className="Feature-parent">
      <div className="Feature-child" >
        <h3>Post-fix</h3>
        <p>Pounce is a post-fix language. Notice that data (nouns) come first followed by verbs. Adding two and two, the nouns are <code>2 2</code> followed by <code>+</code></p>
        <PounceCat pounceCode="2 2 +" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Lists</h3>
        <p>Words can be placed in a lists The list is considered a noun. For example <code>cons</code> is used to make the a list of 10 and * </p>
        <PounceCat pounceCode="10 [*] cons" ></PounceCat>
        <p>A list of words can be invoked Like this:</p>
        <PounceCat pounceCode="5 [10 *] apply" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Fibonacci Numbers</h3>
        <p>To make this sequence, first the stack is seeded with <code>0 1</code>, then adding more elements is done with <code>dup2</code> which duplicates the top two elements of the stack. Adding them together creates the next Fibonacci number. Repeat this n times.</p>
        <PounceCat pounceCode="0 1 [dup2 +] 5 times" ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3>Compose a New Word</h3>
        <p>To define a new word, two lists are needed: first the word or composition of words in a list and then the name of the new word in a second list. In post-fix style, <code>def</code> comes after and adds this new word. </p>
        <PounceCat pounceCode="[2 *] [twice] def
         21 twice" ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3>Recursive Words</h3>
        <p>Here is a definition of 'factorial' as a composition of words that calls itself. </p>
        <PounceCat pounceCode="[0 = [drop] [dup 1 - [*] dip fac] if-else] [fac] def  1 5 fac" ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3><code>linrec</code> for Linear Recursion</h3>
        <p>Without having to compose and name a recursive word, <code>linrec</code> does this with four lists.</p>
        <PounceCat pounceCode="5 [dup 0 ==] [1 +] [dup 1 -] [*] linrec" ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3>Invoke with Names</h3>
        <p>You can invoke a list with a shallow mapping of stack elements to named list elements. This is more convenient than doing lots of stack shuffling to achieve the same result.</p>
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
