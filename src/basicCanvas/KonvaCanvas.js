import React, { useState } from "react";
import { render } from "react-dom";
import {
  Stage,
  Layer,
  Rect,
  Text,
  Circle,
  Line
} from "react-konva/lib/ReactKonvaCore";

// Rect, Text, Circle and line as just react compoents
// they are not loaded into Konva namespace

// so we need to import required shapes manually
import "konva/lib/shapes/Rect";
import "konva/lib/shapes/Text";
import "konva/lib/shapes/Circle";
import "konva/lib/shapes/Line";
import { parse, unParse , interpreter} from '@pounce-lang/core';


const paintElement = (adjust, coords) => {
  switch (coords[1]) {
    case 'square':
      return <Rect
        x={coords[2]}
        y={coords[3]}
        width={coords[4]}
        height={coords[4]}
        fill="pink"
        shadowBlur={20}
        draggable
        onDragMove={(e) => {
          const attr = e.target.attrs;
          const newCoords = [coords[0], coords[1], attr.x, attr.y, coords[4]] 
          adjust(newCoords);
        }}
      //onDragEnd
      />;
      break;
    case 'circle':
      return <Circle
        x={coords[2]}
        y={coords[3]}
        radius={coords[4]}
        fill="pink"
        shadowBlur={20}
        draggable
        onDragMove={(e) => {
          const attr = e.target.attrs;
          const newCoords = [coords[0], coords[1], attr.x, attr.y, coords[4]] 
          adjust(newCoords);
        }}
      />;
      break;
    case 'line':
      return <Line points={[coords[2], coords[3], coords[4], coords[5]]}
        stroke='red'
        strokeWidth={15}
        lineCap='round'
        lineJoin='round' />;
      break;
    default:
  }
};

const pounceOn = (shapes, code) => {
  const upShapes = unParse(shapes);
  const cat = interpreter(upShapes + " " + code);
  const canvasCmds = cat.next().value.stack;
  return canvasCmds;
};


export const KonvaCanvas = (props) => {
  const [shapes, setPs] = useState(parse(props.shapes));
  const [canvasCmds, setCc] = useState(pounceOn(shapes, props.pounceCode));
  
  const alterShape = (i) => (pSnippet) => {
    let newPs = [...shapes]; 
    newPs[i] = pSnippet;
    setPs(newPs);
    setCc(pounceOn(newPs, props.pounceCode))
  };

  return (
    <Stage style={{ width: 370, height: 300, backgroundColor: "#ffffff" }}
      width={370} height={300}>
      <Layer>
        <Text text="( these shapes are draggable :)" fontSize={15} />
        {
          canvasCmds.filter(e => e[1] === 'line')
          .map((coordinate, i) => paintElement(alterShape(i), coordinate))
        }
        {
          canvasCmds.filter(e => e[1] !== 'line')
          .map((coordinate, i) => paintElement(alterShape(i), coordinate))
        }
      </Layer>
    </Stage>
  );
};