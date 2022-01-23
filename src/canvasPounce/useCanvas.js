import { useEffect, useRef } from 'react';


export function draw(ctx, element) {
  if (!element || element.length < 1 || element[0].length < 2) {
    return;
  }
  ctx.beginPath();
  ctx.moveTo(element[0][0], element[0][1]);
  for(let i = 1; i < element.length; i++) {
    ctx.lineTo(element[i][0], element[i][1]);
  }
  ctx.closePath();
  ctx.stroke();
  //     ctx.save();
      
  //     //ctx.scale(0.1, 0.1);
  //     ctx.translate(x - 8, y - 8);
  //     ctx.rotate(225 * Math.PI / 180);
  //     ctx.fill(SVG_HEART_PATH);
  //     ctx.restore();  
};

export function useCanvas(canvasCmds, canvasWidth, canvasHeight){
    const canvasRef = useRef(null);
    
    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );

        // ctx.fillStyle = 'red';
        // ctx.shadowColor = 'purple';
        // ctx.shadowBlur = 10;
        canvasCmds.forEach((coordinate)=>{draw(ctx, coordinate)});
    });

    return [ canvasRef ];
}

