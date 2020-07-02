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

export const KonvaCanvas = (props) => {
  const cat = interpreter(props.pounceCode);
    return (
      <Stage  style={{width: 370, height: 300, backgroundColor:"#ffffff"}}
        width="370" height="300">
        <Layer>
          <Text text="Some text on canvas" fontSize={15} />
          <Rect
            x={20}
            y={50}
            width={100}
            height={100}
            fill="red"
            shadowBlur={10}
          />
          <Circle x={200} y={100} radius={50} fill="green"  draggable />
          <Line
            x={20}
            y={200}
            points={[0, 0, 100, 0, 100, 100]}
            tension={0.5}
            closed
            stroke="black"
            fillLinearGradientStartPoint={{ x: -50, y: -50 }}
            fillLinearGradientEndPoint={{ x: 50, y: 50 }}
            fillLinearGradientColorStops={[0, "red", 1, "yellow"]}
            draggable
          />
        </Layer>
      </Stage>
    );
  };