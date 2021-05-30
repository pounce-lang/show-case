import { useEffect, useRef } from 'react';

const heartSVG = "M0 20 v-20 h20 a10,10 9 0,1 0,20 a10,10 9 0,1 -20,0 z"
const SVG_HEART_PATH = new Path2D(heartSVG);

export function draw(ctx, element){
  const [shape, x, y, sx] = element;
  // console.log(sy, color);
  switch (shape) {
    case 'circle':
      ctx.arc(x, y, sx, 0, Math.PI * 2, 1);
      ctx.fill();
    break;
    case 'square':
      ctx.fillRect(x, y, sx, sx);
    break;
    case 'heart':
      ctx.save();
      
      //ctx.scale(0.1, 0.1);
      ctx.translate(x - 8, y - 8);
      ctx.rotate(225 * Math.PI / 180);
      ctx.fill(SVG_HEART_PATH);
      ctx.restore();  
    break;
    default:
      // console.log("failed to draw shape ===", shape);
    break;
  }
};

export function useCanvas(canvasCmds, canvasWidth, canvasHeight){
    const canvasRef = useRef(null);
    
    useEffect(()=>{
        const canvasObj = canvasRef.current;
        const ctx = canvasObj.getContext('2d');
        ctx.clearRect( 0,0, canvasWidth, canvasHeight );

        ctx.fillStyle = 'red';
        ctx.shadowColor = 'purple';
        ctx.shadowBlur = 10;
        canvasCmds.forEach((coordinate)=>{draw(ctx, coordinate)});
    });

    return [ canvasRef ];
}

