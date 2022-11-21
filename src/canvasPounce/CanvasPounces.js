import React from 'react';
import { useState } from 'react';
import GamePlay from './GamePlay';
import PounceSparkline from '../PounceSparkline';
// import SparkAnimation from '../SparkAnimation';

const CanvasPounces = () => {

  const [src, setSrc] = useState(`# [[x-trans y-trans rotation-deg delta-x delta-y delta-rot][pt-x pt-y][pt-x pt-y]...]
  [[370 200 200 0 0 0][48 50][40 40][66 50][40 60]]
  [[500 200 130 2 3 -2][8 3][0 40][66 100][100 60][90 30][100 10]]
  [[100 100 0 -1 -3 1][8 3][0 70][56 100][56 80][100 40][40 30][50 10]]`);
  const [pounceAmimation, setPounceAnimation] = useState(
    `[0 outAt 0 outAt [3 outAt] dip + 700 [a m][a 0 > [a m %][m] if-else] pounce 0 inAt 
  1 outAt [4 outAt] dip + 400 [a m][a 0 > [a m %][m] if-else] pounce 1 inAt 
  2 outAt [5 outAt] dip + 360 [a m][a 0 > [a m %][m] if-else] pounce 2 inAt 0 inAt] dup dip2 leap`);
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
      <div className="Feature-child double-wide" >
        <h3>Sparklines of Lists</h3>
        <p> Experimental: Sparklines of <code>map</code> operations on lists (tiny line charts of data).</p>
        <PounceSparkline pounceCode={`[1 2 3 4 5 6 7 8 9] dup 
[5 -] map dup
[abs] map dup
[-1 * 2 +] map  dup
[0 max] map dup
[3 -] map dup
[abs] map dup
[-1 * -9 +] map  dup
[0 max] map
[] 0 [.164 + dup [push] dip ] 30 times drop
[sin]
[.628 +] swap concat [dup * .5 -] concat
 map dup [abs -1 *] map`} ></PounceSparkline>
      </div>
    </div>
  );
};

export default CanvasPounces;