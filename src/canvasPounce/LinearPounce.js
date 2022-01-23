import React from 'react';
import { useCanvas } from './useCanvas';
import { interpreter } from '@pounce-lang/core';

const LinearPounce = (props) => {
  // console.log(props.pounceCode);
  const cat = interpreter(props.pounceCode);
  //console.log(cat);
  let result = null;
  try {
    result = cat.next();
  } catch(e) {
    console.error(e);
    result = {value:{stack:[]}};
  }
  console.log(result);
  const [ canvasRef ] = useCanvas(result.value.stack, 792, 400);


  return (
    <div >
      <canvas style={{width: 792, height: 400, backgroundColor:"#ffffff"}}
      width="792" height="400"
        className="App-canvas"
        ref={canvasRef}
      />
    </div>
  );

};

export default LinearPounce;