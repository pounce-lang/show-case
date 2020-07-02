import React from 'react';
import CAHCircle from "./CanvasAnimationHook";
import CanvasPounce from './CanvasPounce';
import { KonvaCanvas } from './KonvaCanvas';

const CanvasPounces = () => {
  return (
    <div className="Feature-parent">
      <div className="Feature-child" >
        <h3>Canvas Effects</h3>
        <p>Since the Pounce core has no side effects other than the stack, how can we draw on a canvas?
          One way is to first run a Pounce program and use the output stack (e.g. <code> [circle 100 100 20] [square 200 100 20] [heart 100 100 20 20 FF0000FF] </code>) and 
          then use a simple interpreter that draws on a canvas. 
        </p>
        <CanvasPounce pounceCode="[circle 200 200 20] [square 100 200 20] [heart 100 100 20 20 FF0000FF]"></CanvasPounce>
      </div>
      <div className="Feature-child" >
        <h3>Canvas drag-n-drop</h3>
        <p>KonvaCanvas is a canvas helper library that adds feedback from a canvas element. Two of the shapes respond to user drag and drop events.</p>
        <KonvaCanvas pounceCode="[circle 100 100 20] [square 200 100 20]"></KonvaCanvas>
      </div>

      <div className="Feature-child" >
        <h3>Animation</h3>
        <p>Work in progress.</p>
        <CAHCircle></CAHCircle>
      </div>
    </div>
  );
};

export default CanvasPounces;