import React, { Component } from "react";
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

const paintShape = (coords) => {
  if (coords[0] === 'square') {
    return  <Rect
      x={coords[1]}
      y={coords[2]}
      width={coords[3]}
      height={coords[3]}
      fill="pink"
      shadowBlur={20}
      draggable
    />;
  }
  else {
    return  <Circle
      x={coords[1]}
      y={coords[2]}
      radius={coords[3]}
      fill="pink"
      shadowBlur={20}
      draggable
    />;
  }
  
};



export const KonvaCanvas = (props) => {
  const cat = interpreter(props.pounceCode);
  const canvasCmds = cat.next().value.stack;
  console.log('*** canvasCmds ***', canvasCmds);
  // result.value.stack
  return (
    <Stage style={{ width: 370, height: 300, backgroundColor: "#ffffff" }}
      width={370} height={300}>
      <Layer>
        <Text text="( these shapes are draggable :)" fontSize={15} />
        {
          canvasCmds.map((coordinate) => paintShape(coordinate))
        }
      </Layer>
    </Stage>
  );
};