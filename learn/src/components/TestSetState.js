import React, { useState } from 'react';

export default function TestUseState() {
    const [counter, setN] = useState({ n: 0, name: 'King' });
    const handleClick = () => {
        let newCouter = {
            ...counter,
            n: counter.n + 1
        };
        setN(() => newCouter);
    };

    const [m, setM] = useState(0);

    const handleSetM = () => {
        setM(m + 1);
        setM(m => m + 1);
    }

    return (
        <div>
            <div>{counter.n} : {counter.name} {m}</div>
            <div onClick={handleClick}>Click</div>
            <div onClick={() => handleSetM()}>SetM Click</div>
        </div >
    )
}