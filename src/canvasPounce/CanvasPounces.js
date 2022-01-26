import React from 'react';
import LinearPounce from './LinearPounce';
import { useState } from 'react';
import GamePlay from './GamePlay';

const CanvasPounces = () => {

  const [src, setSrc] = useState(`# [[x-trans y-trans rotation-deg][pt-x pt-y][pt-x pt-y]...]
[[370 200 200][48 50][40 40][66 50][40 60]]
[[500 200 130][8 3][0 40][66 100][100 60][90 30][100 10]]
[[100 100 0][8 3][0 70][56 100][56 80][100 40][40 30][50 10]]`);
  return (
    <div className="Feature-parent">
      <div className="Feature-child double-wide" >
        <h3>Asteroids</h3>
        <p> <textarea rows="4"
    className="pounceCat-input"
     wrap="true" value={src} 
     onChange={(e)=>setSrc(e.target.value)} 
     spellCheck="false" 
     ></textarea> 
        </p>
        <LinearPounce pounceCode={src}></LinearPounce>
      </div>
      <div className="Feature-child" >
        <h3>Animation basic test </h3>
        <p><code>WIP</code>
        </p>
        <GamePlay ></GamePlay>
      </div>
    </div>
  );
};

export default CanvasPounces;