import { useAnimatedCanvas } from "./useAnimatedCanvas";


const GamePlay = ({ pounceStack, pounceProgram, canvasWidth, canvasHeight }) => {
    const [ref, keyEventTrigger] = useAnimatedCanvas(
        pounceStack, pounceProgram, canvasWidth, canvasHeight);

    return (
        <canvas
            tabIndex="0"
            onKeyDownCapture={(e) => {
                console.log(e.key);
                keyEventTrigger(e.key);
                e.stopPropagation();
                e.nativeEvent.stopImmediatePropagation();
            }}
            ref={ref}
            style={{ width: canvasWidth, height: canvasHeight }}
            width={canvasWidth} height={canvasHeight}

        />
    );
};

export default GamePlay;
