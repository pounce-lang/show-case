import React from 'react';
import CanvasPounce from './CanvasPounce';
import { KonvaCanvas } from './KonvaCanvas';

const CanvasPounces = () => {
  

  return (
    <div >
      <CanvasPounce pounceCode="[circle 200 200 20] [square 100 200 20] [heart 100 100 20 20 FF0000FF]"></CanvasPounce>
      <CanvasPounce pounceCode="[circle 100 100 20] [square 200 100 20]"></CanvasPounce>
      <KonvaCanvas pounceCode="[circle 100 100 20] [square 200 100 20]"></KonvaCanvas>
  </div>
);

};

export default CanvasPounces;