import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import { useState } from 'react';
import { interpreter, unParse } from '@pounce-lang/core';
import './App.css';
import nextId from './nextId';

const PounceSparkline = (props) => {
  const [src, setSrc] = useState(props.pounceCode);
  const [dlId] = useState(nextId("pounceCatDatalist"));
  const cat = parsePounce(src);
  const result = runPounce(cat);
  return (
    <div>
      running:<br /> <div className="prog">{inputPounce(src, setSrc, dlId)}</div>
      <p>the results of map {result?.value?.stack?.map(g => {
        if (Array.isArray(g)) {
          // want a zero line, but what I suspect is a bug in react-sparklines (can be) undone.
          const max = g.reduce((a, i) => a < i ? i : a, 0);
          const min = g.reduce((a, i) => a > i ? i : a, max);
          const range =  (max - min) === 0 ? 0.001 : (max - min);
          const zeroVec = range + (min-0); 
          const lineVal = (zeroVec/range) * 10
          return (
            <Sparklines data={g} width={60} height={20} margin={5}
            svgWidth={70} svgHeight={30}>
              <SparklinesLine />
              <SparklinesReferenceLine type="custom" value={lineVal} />
            </Sparklines>);
        }
        else {
          return "sparkline error";
        }
      }
      )}</p>
      <div  style={{width:'95.5%', fontSize:12, backgroundColor: "rgb(229 206 39)", padding: "2px 2px 2px 8px"}}><code className="stack" >{unParse(result.value.stack)}</code>
      </div>
    </div>
  );
};

const lineCount = (s) => {
  return s.split("\n").length;
};

const inputPounce = (src, setSrc, dlId) => {
  return (<textarea
    className="pounceCat-input"
    wrap="true" value={src}
    rows={lineCount(src)}
    onChange={(e) => setSrc(e.target.value)}
    spellCheck="false"
  ></textarea>);
}

const parsePounce = (src) => {
  try {
    return interpreter(src);
  }
  catch (e) {
    // return ({ error: true, value: { stack: ["Exception: Unable to parse Pounce code."] } });
    return ([]);
  }
}

const runPounce = (cat) => {
  try {
    return cat.next();
  }
  catch (e) {
    return ({ error: true, value: { stack: ["Exception: Unable to run Pounce code."] } });
  }
};

export default PounceSparkline;