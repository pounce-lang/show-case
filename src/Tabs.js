import React from 'react';
import Tabs, { Tab } from 'react-ui-tabs';
import PounceCat from './PounceCat';
export const Examples = () => {
    return(
        <Tabs>
            <Tab tabName="Core Words">
                
      <div className="Feature-parent">
      <div className="Feature-child" >
        <h3>Post-fix</h3>
        <p>Pounce is a post-fix language. Notice that data (nouns) come first followed by verbs. Adding two and two, the nouns are <code>2 2</code> followed by <code>+</code></p>
        <PounceCat pounceCode="2 2 +" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Lists and Phrases</h3>
        <p>Words can be placed in a list where they are considered as nouns. For example <code>cons</code> is used to make the a list of 10 and * </p>
        <PounceCat pounceCode="10 [*] cons" ></PounceCat>
        <p>A list is sometimes called a 'phrase' when the intent is to recite the phrase as a verb at some later time, like this:</p>
        <PounceCat pounceCode="5 [10 *] apply" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Fibonacci Numbers</h3>
        <p>To make this sequence, first the stack is seeded with <code>0 1</code>, then adding more elements is done with <code>dup2</code> which duplicates the top two elements of the stack. Adding them together creates the next Fibonacci number. Repeat this n times.</p>
        <PounceCat pounceCode="0 1 [dup2 +] 5 times" ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3>Compose a New Word</h3>
        <p>To define a new word, two lists are needed: first a composition of words (a phrase) and then the name of the new word wraped in a list. In post-fix style, <code>def</code> comes after and adds this new word. </p>
        <PounceCat pounceCode="[2 *] [twice] def
         21 twice" ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3>Recursive Words</h3>
        <p>Here is a definition of 'factorial' as a recursive composition of words. </p>
        <PounceCat pounceCode="[0 = [drop] [dup 1 - [*] dip fac] if-else] [fac] def  1 5 fac" ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3><code>linrec</code> for Linear Recursion</h3>
        <p>Without having to compose and name a recursive word, <code>linrec</code> does this with four phrases.</p>
        <PounceCat pounceCode="5 [dup 0 ==] [1 +] [dup 1 -] [*] linrec" ></PounceCat>
      </div>
      <div className="Feature-child" >
      <h3>Recite with Names</h3>
        <p>You can recite a phrase with a mapping of the stack elements to a list of names. When a name is used in the phrase, it will be replaced with value from the relative stack position. This is more convenient than doing lots of stack shuffling to achieve the same result.</p>
        <PounceCat pounceCode="3 2 1 [a b c] [a a * b + c c * -] apply-with" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Map</h3>
        <p>Map a phrase onto a list.</p>
        <PounceCat pounceCode="[6 3 8 4 5 7 2 9 1] [2 *] map" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>Quicksort</h3>
        <p>Given a list to sort, binary recursion <code>binrec</code> is used to process both sub lists made by <code>split&lt;</code></p>
        <PounceCat pounceCode="[6 3 8 4 5 7 2 9 1] [size 1 <=] [] [uncons split<] [concat] binrec" ></PounceCat>
      </div>
      </div>

            </Tab>
            <Tab tabName="Canvas Dabbling">
                Content 2
            </Tab>
            <Tab tabName="Games and Animation">
                Content 3
            </Tab>
        </Tabs>
    );
};