import React from 'react';
import { useCanvas } from './useCanvas';
import { interpreter } from '@pounce-lang/core';

const CanvasPounce = (props) => {
  
  const cat = interpreter(props.pounceCode);
  const result = cat.next();
  const [ canvasRef ] = useCanvas(result.value.stack, 400, 300);


  return (
    <div >
      <canvas style={{width: 400, height: 300, backgroundColor:"#ffffff"}}
      width="400" height="300"
        className="App-canvas"
        ref={canvasRef}
      />
    </div>
  );

};

export default CanvasPounce;