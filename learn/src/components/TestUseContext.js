import { useContext } from 'react';
import { ColorContext } from './ColorContext'


export default function TestUseContext() {
    const { state, dispatch } = useContext(ColorContext);
    const handleChangeColor = () => {
        dispatch({ type: 'changeColor', color: 'yellowgreen' });
    };

    return (
        <div onClick={handleChangeColor}> TestUseContext {state.color} </div>
    )
}