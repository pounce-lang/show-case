import { useAnimatedCanvas } from "./useAnimatedCanvas";

const GamePlay = ({pounceStack, pounceProgram, canvasWidth, canvasHeight}) => {
    const [ref] = useAnimatedCanvas(
        pounceStack, pounceProgram, canvasWidth, canvasHeight);

    return (
        <canvas
            ref={ref}
            style={{ width: canvasWidth, height: canvasHeight }}
            width={canvasWidth} height={canvasHeight}
        />
    );
};

export default GamePlay;
