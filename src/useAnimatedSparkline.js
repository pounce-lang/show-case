import { useEffect, useRef } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import * as r from 'ramda';
import { interpreter, parse } from '@pounce-lang/core';

function draw(sparkline, lists) {
  return (<p> {lists.map(g => {
    if (Array.isArray(g)) {
      // want a zero line, but what I suspect is a bug in react-sparklines (can be) undone.
      const max = g.reduce((a, i) => a < i ? i : a, -99999);
      const min = g.reduce((a, i) => a > i ? i : a, max);
      const range = (max - min);
      const zeroVec = range + min; 
      const lineVal = range < 0.00001 ? 5 + min: (zeroVec/range) * 10
      // console.log(max, min, range, "|", zeroVec, lineVal);
      return (
        <Sparklines ref={ref} data={g} width={60} height={20} margin={5}
        svgWidth={70} svgHeight={30}>
          <SparklinesLine />
          <SparklinesReferenceLine type="custom" value={lineVal} />
        </Sparklines>);
    }
    else {
      return "sparkline error";
    }
  }
  )}</p>);
};

export function useAnimatedSparkline(animationStep) {
  let ref = useRef();
  let pounceProgram = typeof animationStep === 'string' ? parse(animationStep) : animationStep;

  useEffect(() => {
    let sparkline = ref.current;
    let requestId,
      start = 0, last = 0;
    const render = (timestamp) => {
      if (start === 0 && timestamp !== 0) {
        start = timestamp;
      }
      // const elapsed = (timestamp - start) / 1000;
      const sinceLast = timestamp - last;
      if (sinceLast > 200) {
        // apply animation step
        const program = r.concat(timestamp+"", pounceProgram);
        //console.log(program);
        const cat = interpreter(program);

        // console.log(cat);
        let result = null;
        try {
          result = cat.next();
        } catch (e) {
          console.error(e);
          result = { value: { stack: [] } };
        }
        // console.log(result);

        result.value.stack.forEach((sparkData) => { draw(sparkline, sparkData) });
        // console.log('*** sinceLast, elapsed ***', sinceLast, elapsed);
        last = timestamp;
      }
      //if (last === 0 || elapsed < 100) {
      requestId = requestAnimationFrame(render);
      //}

    };

    render(0);

    return () => {
      cancelAnimationFrame(requestId);
    };


  }, [ref, pounceProgram]);

  return [ref];
}
