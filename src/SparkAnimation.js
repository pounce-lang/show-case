import { useAnimatedSparkline } from "./useAnimatedSparkline";

//   const [sparkRefs] = useAnimatedSparkline(" [1 2 3 4 5 6 7 8 9] swap [] cons [+ 9 %] concat play");

const SparkAnimation = ({ pounceProgram }) => {
    const [sparkRef] = useAnimatedSparkline(pounceProgram);

    return (
        <Sparklines data={g} width={60} height={20} margin={5}
        ref={sparkRef}
        svgWidth={70} svgHeight={30}>
          <SparklinesLine />
          <SparklinesReferenceLine type="custom" value={5} />
        </Sparklines>);
};

export default SparkAnimation;

