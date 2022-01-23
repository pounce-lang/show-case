import React from 'react';
import LinearPounce from './LinearPounce';
import { useState } from 'react';

const CanvasPounces = () => {

  const [src, setSrc] = useState("[[48 50][40 40][66 50][40 60]]");
  return (
    <div className="Feature-parent">
      <div className="Feature-child double-wide" >
        <h3>Asteroids</h3>
        <p> <textarea
    className="pounceCat-input"
     wrap="true" value={src} 
     onChange={(e)=>setSrc(e.target.value)} 
     spellCheck="false" 
     ></textarea> 
        </p>
        <LinearPounce pounceCode={src}></LinearPounce>
      </div>
      
    </div>
  );
};

export default CanvasPounces;