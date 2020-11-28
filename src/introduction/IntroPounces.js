import React from 'react';
import PounceCat from '../PounceCat';

export const IntroPounces = () => {
    return(
    <div className="Feature-parent">
      <div className="Feature-child double-wide">
        <h3>Pounce is Concatenative</h3>
        <p>Pounce is a Concatenative language, influenced by Forth, Postscript, Joy, Cat and Kitten.</p>
        <p>A Concatenative language provides for the "composition of functions" as a first class operation and programs are constructed by composing functions together. For more information on Concatenative languages,&nbsp; <a href="https://concatenative.org/wiki/view/Concatenative%20language" target="_top">concatenative.org</a> is a comprehensive resource. Additionally this timeline of Concatenative Programming illustrates their history.</p>
      </div>
      <div className="Feature-child" >
        <h3>Post-fix</h3>
        <p>Pounce is a post-fix language. Notice that data (nouns) come first followed by verbs.
           For instance, when adding two and two, the nouns are <code> 2 2 </code> followed by the verb <code> + </code>
           </p>
        <PounceCat pounceCode="2 2 +" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Lists and Phrases</h3>
        <p>Words can be placed in a list where they are considered as nouns. For example <code>cons</code> is used to make the a list of 10 and * </p>
        <PounceCat pounceCode="10 [*] cons" ></PounceCat>
        <p>A list is sometimes called a 'phrase' when the intent is to recite the phrase as a verb at some later time, like this:</p>
        <PounceCat pounceCode="5 [10 *] play" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Fibonacci Numbers</h3>
        <p>To make this sequence, first the stack is seeded with <code>0 1</code>, then adding more elements is done with <code>dup2</code> which duplicates the top two elements of the stack. Adding them together creates the next Fibonacci number. Repeat this n times.</p>
        <PounceCat pounceCode="0 1 [dup2 +] 5 times" ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3>Compose a New Word</h3>
        <p>To define a new word, two lists are needed: first a composition of words (a phrase) and then the name of the new word wrapped in a list. In post-fix style, <code>compose</code> comes after and adds this new word. </p>
        <PounceCat pounceCode="[2 *] [twice] compose
         21 twice" ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3>Recursive Words</h3>
      <p>Here is a definition of 'factorial' as a recursive composition of words. </p>
      <p>Notice that the word <code>fac</code> is used as part of its own composition. As with any recursive function, make sure to use an 'if' clause that tests for the terminal case.</p>
        <PounceCat pounceCode={
`[0 = [drop] [dup 1 - [*] dip fac]
  if-else] [fac] compose  1 5 fac`} ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3><code>linrec</code> for Linear Recursion</h3>
        <p>A second version of 'factorial', this time without having to compose and name your own (recursive) word. 
          Instead, <code>linrec</code> does this with four short phrases.</p>
        <PounceCat pounceCode="5 [dup 0 ==] [1 +] [dup 1 -] [*] linrec" ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3>The word Pounce uses named stack items</h3>
        <p>You can pounce on a phrase with a named mapping of the stack elements. 
          When a name is used in the phrase, it will be replaced with the value from the relative
           stack position. This is more convenient than doing lots of stack shuffling
            to achieve the same result.</p>
        <p>Here is the formula for the slope of a line. Yes, this may not be 'point-free', but no variables 
          are bound in the process, so think of this as coping 'in' of stack values into your phrase.</p>
        <PounceCat pounceCode="3 2 1 [m x b] [m x * b +] pounce" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Map Filter Reduce</h3>
        <p>Map a phrase onto a list.</p>
        <PounceCat pounceCode="[6 3 8 4 5 7 2 9 1] [2 *] map" ></PounceCat>
        <p>Filter a list.</p>
        <PounceCat pounceCode="[6 3 8 4 5 7 2 9 1] [2 % 0 ==] filter" ></PounceCat>
        <p>Reduce.</p>
        <PounceCat pounceCode="[6 3 8 4 5 7 2 9 1] 1 [*] reduce" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Quicksort</h3>
        <p>Given a list to sort, binary recursion <code>binrec</code> is used to process both sub lists made by <code>[&gt;] split</code></p>
        <PounceCat pounceCode="[6 3 8 4 5 7 2 9 1] [size 1 <=] [] [uncons [>] split] [concat] binrec" ></PounceCat>
      </div>
    </div>
    );
};