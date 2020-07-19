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
import { interpreter } from '@pounce-lang/core';

const rectCenter = (attr) => {
  // console.log('*** attr ***', attr);
  const w = attr.width/2;
  return [attr.x+w, attr.y+w];
};

const paintShape = (adjustLine, coords) => {
  if (coords[0] === 'square') {
    return <Rect
      x={coords[1]}
      y={coords[2]}
      width={coords[3]}
      height={coords[3]}
      fill="pink"
      shadowBlur={20}
      draggable
      onDragMove={(e) => {
        const attr = e.target.attrs;
        adjustLine('tail', rectCenter(attr));
      }}
    //onDragEnd
    />;
  }
  else {
    return <Circle
      x={coords[1]}
      y={coords[2]}
      radius={coords[3]}
      fill="pink"
      shadowBlur={20}
      draggable
      onDragMove={(e) => {
        const attr = e.target.attrs;
        adjustLine('head', [attr.x, attr.y]);
      }}
    />;
  }

};



export const KonvaCanvas = (props) => {
  const cat = interpreter(props.pounceCode);
  const canvasCmds = cat.next().value.stack;
  // console.log('*** canvasCmds ***', canvasCmds);
  const [line, setLine] = useState([canvasCmds[0][1], canvasCmds[0][2], ...rectCenter({x:canvasCmds[1][1], y: canvasCmds[1][2], width: canvasCmds[1][3]})]);
  // result.value.stack

  const adjustLine = (setLine) => (pos, pt) => {
    const pts = pos === 'tail' ? [line[0], line[1], pt[0], pt[1]] : [pt[0], pt[1], line[2], line[3]]
    return setLine(pts);
  }

  return (
    <Stage style={{ width: 370, height: 300, backgroundColor: "#ffffff" }}
      width={370} height={300}>
      <Layer>
        <Line points={line}
          stroke='red'
          strokeWidth={15}
          lineCap='round'
          lineJoin='round' />
        <Text text="( these shapes are draggable :)" fontSize={15} />
        {
          canvasCmds.map((coordinate) => paintShape(adjustLine(setLine), coordinate))
        }
      </Layer>
    </Stage>
  );
};