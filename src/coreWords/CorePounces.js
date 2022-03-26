import React from 'react';
import PounceCat from '../PounceCat';

export const CorePounces = () => {
  return (
    <div className="Feature-parent">
      <div className="Feature-child double-wide">
        <h3>Pounce Words</h3>
        <p>Pounce can introspect on its' own words with the core word <code>words</code>, Each word is documented below.
  Pounce words are divided up into these types [Arithmetic, Stack, List, Flow and Introspection].
</p><PounceCat pounceCode="words" ></PounceCat></div>
      <div className="Feature-child" >
        <h3>[Arithmetic] + - </h3>
        <p>basic arithmetic with words <code>+</code> <code>-</code> <code>*</code> and <code>/</code>.
        </p>
        <PounceCat pounceCode="22 7 +" ></PounceCat>
        <PounceCat pounceCode="22 7 -" ></PounceCat>
        <PounceCat pounceCode="22 7 *" ></PounceCat>
        <PounceCat pounceCode="22 7 /" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>[Flow] play</h3>
        <p> The word <code>play</code> enables a phrase as code, here dequoting and 'playing' <code>[2 /]</code> back</p>
        <PounceCat pounceCode={"7 [2 /] play"} ></PounceCat>
      </div>
      <div className="Feature-child double-wide" >
        <h3>[Flow] crouch</h3>
        <p> The word <code>crouch</code> copies named stack items into a phrase. </p>
        <p> Crouch consumes stack elements and copies those values in. This example, the values for 'm' and 'b' are from the stack and the resulting phrase is funciton for a specific line, to be combined with some 'x' value on the stack later.</p>
        <PounceCat pounceCode={`# y = mx + b
4 0 [m b] [m * b +] crouch`} ></PounceCat>
<p> Or this phrase could be mapped onto a list of 'x' values, yielding a list of 'y' values</p>
        <PounceCat pounceCode={`[1 2 3] [4 * -1 +] map`} ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>[Flow] pounce</h3>
        <p> The word <code>pounce</code> copies stack items into a <code>[phrase]</code>, just like crouch, then immediately <code>play</code>s that phrase</p>
        <PounceCat pounceCode={`# y = mx + b
4 0 0.5 [m b x] [m x * b +] pounce`} ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>[Arithmetic] Discrete words</h3>
        <p> math AND <code> &&</code> OR <code> ||</code> and NOT <code> !</code> </p>
        <PounceCat pounceCode="true false ||" ></PounceCat>
        <PounceCat pounceCode="true false && !" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>[Introspect] word signature</h3>
        <p> <code>word</code> looks up a word signature</p>
        <PounceCat pounceCode="[dup] word" ></PounceCat>
      </div>
    </div>
  );
};
