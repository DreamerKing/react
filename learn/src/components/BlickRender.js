import { useState, useEffect, useRef, useLayoutEffect } from 'react';

export default function BlinkRender() {
    const [value, setValue] = useState(0);
    const time = useRef(null);
    /* 
        useEffect(() => {
            console.log('effect');
            document.querySelector('#x').innerText = 'value: 1000';
            if (time.current) {
                console.log(performance.now() - time
                    .current);
            }
        }, [value]); */

    useLayoutEffect(() => {
        if (time.current) {
            console.log(performance.now() - time
                .current);
        }
    })

    const handleClick = () => {
        setValue(value + 1);
        time.current = performance.now();
    }

    return (
        <div id="x" onClick={handleClick} >value: {value}</div>
    );
}