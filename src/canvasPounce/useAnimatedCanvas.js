import { useEffect, useRef } from 'react';
import * as r from 'ramda';
import { interpreter, parse } from '@pounce-lang/core';

function draw(ctx, element) {
    if (!element || element.length < 1 || element[0].length < 3) {
      return;
    }
    ctx.save();
    ctx.translate(element[0][0], element[0][1]);
    // ctx.translate(50, 50);
    ctx.rotate(element[0][2] * Math.PI / 180);
    ctx.translate(-50, -50);
    ctx.beginPath();
    ctx.moveTo(element[1][0], element[1][1]);
    for(let i = 2; i < element.length; i++) {
      ctx.lineTo(element[i][0], element[i][1]);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
    //     ctx.save();
        
    //     //ctx.scale(0.1, 0.1);
    //     ctx.translate(x - 8, y - 8);
    //     ctx.rotate(225 * Math.PI / 180);
    //     ctx.fill(SVG_HEART_PATH);
    //     ctx.restore();  
  };

export function useAnimatedCanvas(pounceState, animationStep, canvasWidth, canvasHeight){
    let ref = useRef();
    let key = '0';
    let lastKey = useRef('0');
    let pounceStack = typeof pounceState === 'string' ? parse(pounceState) : pounceState;
    let pounceProgram = typeof animationStep === 'string' ? parse(animationStep) : animationStep;
    useEffect(() => {
        let canvas = ref.current;
        let ctx = canvas.getContext('2d');

        // let ratio = getPixelRatio(ctx);
        // let width = getComputedStyle(canvas)
        //     .getPropertyValue('width')
        //     .slice(0, -2);
        // let height = getComputedStyle(canvas)
        //     .getPropertyValue('height')
        //     .slice(0, -2);

        // canvas.width = width * ratio;
        // canvas.height = height * ratio;
        // canvas.style.width = `${width}px`;
        // canvas.style.height = `${height}px`;

        let requestId,
            start = 0, last = 0;
        const render = (timestamp) => {
            if (start === 0 && timestamp !== 0) {
                start = timestamp;
            }
            const elapsed = (timestamp - start) /1000;
            const sinceLast = timestamp - last;
            if (sinceLast > 200) {
                // apply animation step
                const program = r.concat(pounceStack, pounceProgram);
                //console.log(program);
                const cat = interpreter(program);
                
                // console.log(cat);
                let result = null;
                try {
                  result = cat.next();
                } catch(e) {
                  console.error(e);
                  result = {value:{stack:[]}};
                }
                // console.log(result);
              
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                result.value.stack.forEach((coordinate)=>{draw(ctx, coordinate)});
                // console.log('*** sinceLast, elapsed ***', sinceLast, elapsed);
                last = timestamp;
            }
            //if (last === 0 || elapsed < 100) {
                requestId = requestAnimationFrame(render);
            //}

            if(key !== lastKey) {
              console.log(`render ${key}`);
              lastKey = '0';
              key = '0';
            }
          };

          render(0);

        return () => {
            cancelAnimationFrame(requestId);
        };

       
    }, [ref, pounceStack, pounceProgram, key]);

    const keyEventTrigger = (k) => {
      console.log(`got ${key}`);
      key = k;
    }
    return [ ref, keyEventTrigger ];
}
