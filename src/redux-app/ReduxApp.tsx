import { useSelector, useDispatch } from "react-redux";

import {
  increment,
  decrement,
  incrementBy,
} from "../features/counter/counterSlice.js";

export default function ReduxApp() {
  const counter = useSelector((state: any) => state.counter.value);
  const dispactch = useDispatch();
  return (
    <div>
      <p>{counter}</p>
      <div>
        <button onClick={() => dispactch(increment())}>Increment</button>
        <button onClick={() => dispactch(decrement())}>Decrement</button>
        <button onClick={() => dispactch(incrementBy(3))}>IncrementBy</button>
      </div>
    </div>
  );
}
