import { useState, useMemo, useCallback, memo } from 'react';

export default function TestUseMemo() {
    const [n, setN] = useState(0);
    const [m, setM] = useState(0);
    const onClick = () => {
        setN(n + 1);
    };

    const handleClick = () => {
        setM(m + 2);
    }

    /*  const onClickChild = () => {
         console.log('onClickChild');
     } */

    const onClickChild = useMemo(() => {
        return () => {
            console.log('onClickChild');
        };
    }, [m]);

    /* const onClickChild = useCallback(() => {
        console.log('onClickChild');
    }, [m]); */


    return (
        <div>
            <div>
                <button onClick={onClick}>update n {n}</button>
            </div>
            <button onClick={handleClick}>Change M {m}</button>
            {/* <Child data={m} onClick={onClickChild} /> */}
            <Child2 data={m} onClick={onClickChild} />
        </div>
    );
}

/* function Child(props) {
    console.log("child 执行了");
    return <div onClick={props.onClick}>child: {props.data}</div>;
} */



const Child = memo((props) => {
    console.log("child 执行了");
    return <div onClick={props.onClick}>child: {props.data}</div>;
});

const Child2 = memo(Child);
