import { useReducer } from 'react'

const inital = { n: 0 };

const reducerMap = {
    add(state, action) {
        return { n: state.n + action.count };
    },
    mult(state, action) {
        return { n: state.n * 2 };
    }
}

const reducer = (state, action) => {
    const fn = reducerMap[action.type];
    if (fn) {
        return fn(state, action);
    } else {
        return state;
    }
    /*  switch (action.type) {
         case 'add':
             return { n: state.n + action.count };
         case 'mult':
             return { n: state.n * 2 };
         default:
             return state;
     } */
}

export default function TestUseReducer() {
    const [state, dispatch] = useReducer(reducer, inital);
    const handleAdd = () => {
        dispatch({ type: 'add', count: 3 });
    };

    const handleDouble = () => {
        dispatch({ type: 'mult' });
    };

    return (
        <div>
            <div>{state.n}</div>
            <div onClick={handleAdd}>Increse</div>
            <div onClick={handleDouble}>Double</div>
        </div>
    )
}