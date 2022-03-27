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
      <p>{unParse(result?.value?.stack)}</p>
      <p>the results of map {result?.value?.stack?.map(g => {
        console.log(typeof g);
        if (Array.isArray(g)) {
          return (
            <Sparklines data={g} width={60} height={20} margin={5}
            svgWidth={70} svgHeight={30}>
              <SparklinesLine />
              <SparklinesReferenceLine type="custom" value={10} />
            </Sparklines>);
        }
        else {
          return "sparkline error";
        }
      }
      )}</p>
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