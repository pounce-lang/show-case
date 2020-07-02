import React from 'react';
import CAHCircle from "./CanvasAnimationHook";
import CanvasPounce from './CanvasPounce';
import { KonvaCanvas } from './KonvaCanvas';

const CanvasPounces = () => {
  return (
    <div className="Feature-parent">
      <div className="Feature-child" >
        <h3>Canvas Effects</h3>
        <p>Trouble is that the Pounce core only creates a stack, with no other side effects. So how can we draw on the canvas?
          One way is to first run a Pounce program that makes a stack like this <code> 2 2 </code> and 
          then use an simple interpreter that draws on the canvas. 
        </p>
        <KonvaCanvas pounceCode="[circle 100 100 20] [square 200 100 20]"></KonvaCanvas>
      </div>
      <div className="Feature-child" >
        <h3>Canvas Cats</h3>
       
        <CanvasPounce pounceCode="[circle 200 200 20] [square 100 200 20] [heart 100 100 20 20 FF0000FF]"></CanvasPounce>
      </div>

      <div className="Feature-child" >
        <h3>Annimation</h3>
        <CAHCircle></CAHCircle>
      </div>
    </div>
  );
};

export default CanvasPounces;