import React, { useEffect, useRef } from 'react';

const getPixelRatio = context => {
    const backingStore =
        context.backingStorePixelRatio ||
        context.webkitBackingStorePixelRatio ||
        context.mozBackingStorePixelRatio ||
        context.msBackingStorePixelRatio ||
        context.oBackingStorePixelRatio ||
        context.backingStorePixelRatio ||
        1;

    return (window.devicePixelRatio || 1) / backingStore;
};

const CAHCircle = () => {
    let ref = useRef();

    useEffect(() => {
        let canvas = ref.current;
        let context = canvas.getContext('2d');

        let ratio = getPixelRatio(context);
        let width = getComputedStyle(canvas)
            .getPropertyValue('width')
            .slice(0, -2);
        let height = getComputedStyle(canvas)
            .getPropertyValue('height')
            .slice(0, -2);

        canvas.width = width * ratio;
        canvas.height = height * ratio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        let requestId,
            start = 0, last = 0;
        const render = (timestamp) => {
            if (start === 0 && timestamp !== 0) {
                start = timestamp;
            }
            const elapsed = (timestamp - start) /1000;
            const sinceLast = timestamp - last;
            if (sinceLast > 1000) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.beginPath();
                context.arc(
                    canvas.width / 2 + canvas.width / 2 * Math.sin(elapsed),
                    canvas.height / 2 + canvas.height / 2 * Math.cos(elapsed),
                    canvas.width / (2 * Math.PI) + (canvas.width / 2) * (Math.sin(elapsed) + 1) / 2,
                    0,
                    2 * Math.PI
                );
                context.fill();

                console.log('*** sinceLast, elapsed ***', sinceLast, elapsed);
                last = timestamp;
            }
            if (last === 0 || elapsed < 10) {
                requestId = requestAnimationFrame(render);
            }
        };

        render(0);

        return () => {
            cancelAnimationFrame(requestId);
        };
    });

    return (
        <canvas
            ref={ref}
            style={{ width: '400px', height: '300px' }}
        />
    );
};

export default CAHCircle;
