import React from 'react';
import { interpreter , unParse} from '@pounce-lang/core';
import './App.css';

function PounceCat(props) {
  const cat = interpreter(props.pounceCode);
  const result = cat.next();
  return (
    <div>
      running<br/> <code className="prog">[{props.pounceCode}]</code><br/>
      yeilds:<br/>  <code className="stack" >[{unParse(result.value.stack)}]</code>
    </div>
  );
}

export default PounceCat;
