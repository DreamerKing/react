import { useRef, createRef, useEffect, useImperativeHandle, forwardRef } from 'react';


export default function TestForwardRef2() {
    const btnRef = useRef();
    useEffect(() => {
        console.log(btnRef.current);
    });
    return (
        <div>
            <Button2 ref={btnRef}>Button2</Button2>
            <button onClick={() => {
                console.log(btnRef);
                btnRef.current.x();
                // btnRef.current.remove();
            }
            }>remove</button>
        </div>
    )
}

const Button2 = forwardRef((props, ref) => {
    const realButton = createRef(null);
    const setRef = useImperativeHandle;
    setRef(ref, () => {
        return {
            x: () => {
                realButton.current.remove();
            },
            realButton
        };
    });
    return <button ref={realButton} {...props}>Show</button>
})