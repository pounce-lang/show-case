import React from 'react';
import { interpreter , unParse} from '@pounce-lang/core';
import './App.css';

function PounceCat(props) {
  const cat = interpreter(props.pounceCode);
  const result = cat.next();
  return (
    <div>
      <code className="stack" >[{unParse(result.value.stack)}]</code><br/> 
      is the result of running <br/>
      <code className="prog">[{props.pounceCode}]</code>
    </div>
  );
}

export default PounceCat;
