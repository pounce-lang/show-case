import React from 'react';
import { useState } from 'react';
import { interpreter , unParse} from '@pounce-lang/core';
import './App.css';
import nextId from './nextId';
// import * as r from 'ramda';

const PounceCat = (props) => {
  const [src, setSrc] = useState(props.pounceCode);
  const [dlId] = useState(nextId("pounceCatDatalist"));
  const cat = interpreter(src);
  const result = runPounce(cat);
  
  return (
    <div>
      running<br/> <code className="prog">{inputPounce(src, setSrc, dlId)}</code>
      <datalist id={dlId}>
        <option value={props.pounceCode} label="(original code example)" ></option>
      </datalist>
      <br/>
      yields:<br/>  <div  style={{width:'95.5%', backgroundColor: "rgb(207, 204, 178)", padding: "2px 2px 2px 8px"}}><code className="stack" >{unParse(result.value.stack)}</code>
      </div>
    </div>
  );
};

const inputPounce = (src, setSrc, dlId) => {
  if (src.length < 36) {
    return (<input type="text" 
    className="pounceCat-input"
    // size={props.pounceCode.length}
    value={src} 
    onChange={(e)=>setSrc(e.target.value)} 
    list={dlId}
    spellCheck="false" />);
  }
  return (<textarea
    className="pounceCat-input"
     wrap="true" value={src} 
     onChange={(e)=>setSrc(e.target.value)} 
     spellCheck="false" 
     ></textarea>);
}

const runPounce = (cat) => {
  try {
    return cat.next();
  }
  catch(e) {
    return ({error: true, value: {stack: ["Exception: Unable to run Pounce code."]}});
  }
};

export default PounceCat;