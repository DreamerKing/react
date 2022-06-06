import { useState, useEffect } from 'react'

export default function TestUseEffect() {
    const [n, setN] = useState(0);

    const handleClick = () => {
        setN(n + 1);
    }

    useEffect(() => {
        console.log('first');
    }, []);

    useEffect(() => {
        console.log('every time');
    });

    useEffect(() => {
        console.log('time', n);
    }, [n]);

    useEffect(() => {
        if (n !== 1) {
            console.log('n == 1 跳过')
        }
    }, [n]);

    /*   useEffect(() => {
          setTimeout(() => {
              setN(n + 1);
          }, 1000);
      });
   */
    useEffect(() => {
        console.log('interval')
        const timer = setInterval(() => {
            console.log('hi');
        }, 2000);
        return () => {
            console.log('clear');
            clearInterval(timer);
        }
    })


    return (
        <div>
            <div>{n}</div>
            <div onClick={handleClick}>Click</div>
        </div>
    )
}