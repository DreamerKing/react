import { useState, useRef, useEffect } from 'react'

export default function TestUseRef() {
    const count = useRef({ m: 0 });

    useEffect(() => {
        console.log(count.current);
    });

    const [n, setN] = useState(0);

    const onClick = () => {
        setN(n + 1);
    }

    const handleClick = () => {
        count.current.m += 2;
    }


    return (
        <div>
            <div onClick={onClick}>{n}</div>
            <div onClick={handleClick}>{count.current.m}</div>
        </div>
    )
}