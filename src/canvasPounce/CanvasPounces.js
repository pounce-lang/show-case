import React from 'react';
import { useState } from 'react';
import GamePlay from './GamePlay';

const CanvasPounces = () => {

  const [src, setSrc] = useState(`# [[x-trans y-trans rotation-deg delta-x delta-y delta-rot][pt-x pt-y][pt-x pt-y]...]
  [[370 200 200 0 0 0][48 50][40 40][66 50][40 60]]
  [[500 200 130 2 3 -2][8 3][0 40][66 100][100 60][90 30][100 10]]
  [[100 100 0 -1 -3 1][8 3][0 70][56 100][56 80][100 40][40 30][50 10]]`);
const [pounceAmimation, setPounceAnimation] = useState(
  `[0 outAt 0 outAt [3 outAt] dip + 700 [a m][a 0 > [a m %][m] if-else] pounce 0 inAt 
  1 outAt [4 outAt] dip + 400 [a m][a 0 > [a m %][m] if-else] pounce 1 inAt 
  2 outAt [5 outAt] dip + 360 [a m][a 0 > [a m %][m] if-else] pounce 2 inAt 0 inAt] dup dip2 play`);
  const [pounceKeyHandler, setPounceKeyHandler] = useState(
    `[0 outAt 2 outAt 3 + 2 inAt 0 outAt 700 % 1 + 0 inAt 1 outAt 1 - dup 0 < [drop 400][] if-else 1 inAt 0 inAt] dip2`);
    return (
    <div className="Feature-parent">
      <div className="Feature-child double-wide" >
        <h3>Asteroids</h3>
        <p> <textarea rows="4"
          className="pounceCat-input"
          wrap="true" value={src}
          onChange={(e) => setSrc(e.target.value)}
          spellCheck="false"
        ></textarea>
        <textarea rows="4"
          className="pounceCat-input"
          wrap="true" value={pounceAmimation}
          onChange={(e) => setPounceAnimation(e.target.value)}
          spellCheck="false"
        ></textarea>
        <textarea rows="4"
          className="pounceCat-input"
          wrap="true" value={pounceKeyHandler}
          onChange={(e) => setPounceKeyHandler(e.target.value)}
          spellCheck="false"
        ></textarea>
        </p>
        <GamePlay pounceStack={src} pounceProgram={pounceAmimation}
          pounceKeyHandler={pounceKeyHandler}
          canvasWidth={792} canvasHeight={400}
          ></GamePlay>
      </div>
      <div className="Feature-child" >
        <h3>Animation basic test </h3>
        <p><code>WIP</code>
        </p>
        <GamePlay pounceStack={[[[100, 100, 0],[40, 40],[60, 50],[40, 60]]]} 
        pounceProgram={[0, 'outAt', 2, 'outAt', 3, '+', 2, 'inAt', 0, 'inAt']}
        canvasWidth={400} canvasHeight={300} ></GamePlay>
      </div>
    </div>
  );
};

export default CanvasPounces;