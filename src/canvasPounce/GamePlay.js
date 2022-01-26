import { useAnimatedCanvas } from "./useAnimatedCanvas";

const GamePlay = () => {
    const [ref] = useAnimatedCanvas(
        [[[100, 100, 0],[40, 40],[60, 50],[40, 60]]], 
        [0, 'outAt', 2, 'outAt', 3, '+', 2, 'inAt', 0, 'inAt'], 370, 300);

    return (
        <canvas
            ref={ref}
            style={{ width: '370px', height: '300px' }}
        />
    );
};

export default GamePlay;
