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
        <p>Words <code>+</code> and <code>-</code> compose with numbers to produce a number (the sum or difference).
        </p>
        <PounceCat pounceCode="22 7 +" ></PounceCat>
        <PounceCat pounceCode="22 7 -" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>[Arithmetic] * / </h3>
        <p>Words <code>*</code> and <code>/</code> compose with numbers to produce a number (the product or ratio) or an exception.
        </p>
        <PounceCat pounceCode="22 7 *" ></PounceCat>
        <PounceCat pounceCode="22 7 /" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>[Flow] pounce</h3>
        <p> The word <code>pounce</code> is a convenient way to copy stack items into and <code>play</code> a phrase</p>
        <PounceCat pounceCode={`# y = mx + b
4 0 0.5 [m b x] [m x * b +] pounce`} ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3></h3>
        <p> <code>  </code> </p>
        <PounceCat pounceCode="" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3></h3>
        <p> <code>  </code> </p>
        <PounceCat pounceCode="" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3></h3>
        <p> <code>  </code> </p>
        <PounceCat pounceCode="" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3></h3>
        <p> <code>  </code> </p>
        <PounceCat pounceCode="" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3></h3>
        <p> <code>  </code> </p>
        <PounceCat pounceCode="" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3></h3>
        <p> <code>  </code> </p>
        <PounceCat pounceCode="" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3></h3>
        <p> <code>  </code> </p>
        <PounceCat pounceCode="" ></PounceCat>
      </div>
      <div className="Feature-child" >
        <h3>[Introspect] word signature</h3>
        <p> <code>word</code> looks up a word signature</p>
        <PounceCat pounceCode="[dup] word" ></PounceCat>
      </div>
    </div>
  );
};
