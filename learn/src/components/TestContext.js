import { useReducer } from 'react';
import { ColorContext } from './ColorContext';
import TestUseContext from './TestUseContext';

const store = { color: 'red' };

function reducer(state, action) {
    if (action.type === 'changeColor') {
        return { ...state, color: action.color };
    } else {
        return state;
    }
}


export default function TestContext() {
    const [state, dispatch] = useReducer(reducer, store);
    return (
        <ColorContext.Provider value={{ state, dispatch }}>
            <div style={state}>Test Context </div>
            <TestUseContext />
        </ColorContext.Provider>
    )
}