import { useRef, forwardRef, useState } from 'react';

export default function TestForwardRef() {
    const buttonRef = useRef();
    const mBtnRef = useRef();
    return (
        <div>
            <Button3 ref={buttonRef}></Button3>
            <MovableButton name="test" ref={mBtnRef}></MovableButton>
        </div>
    )
}

const Button2 = (props, ref) => {
    console.log(props);
    console.log(ref);
    return <button ref={ref} {...props}>Click</button>
}



const Button3 = forwardRef(Button2);
const MovableButton = movable(Button3);

function movable(Component) {
    function Component2(props, ref) {
        console.log(props, ref);
        const [position, setPosition] = useState([0, 0]);
        const lastPosition = useRef();

        const onMouseDown = (e) => {
            lastPosition.current = [e.clientX, e.clientY];
        };

        const onMouseMove = e => {
            if (lastPosition.current) {
                const x = e.clientX - lastPosition.current[0];
                const y = e.clientY - lastPosition.current[1];
                setPosition([position[0] + x, position[1] + y]);
            }
        }

        const onMouseUp = () => {
            lastPosition.current = null;
        }

        return (
            <div onMouseUp={onMouseUp}
                onMouseMove={onMouseMove}
                onMouseDown={onMouseDown}
                style={{ left: position?.[0], top: position?.[1] }}>
                <Component {...props} ref={ref}></Component>
            </div>
        )
    }
    return forwardRef(Component2);

}