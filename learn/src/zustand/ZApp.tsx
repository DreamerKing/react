import { useCounterStore } from "./counter.js";

export default function ZApp() {
  return (
    <div>
      <h1>Zustand Counter</h1>
      <Counter />
    </div>
  );
}

function Counter() {
  const { count, increment, decrement, reset } = useCounterStore();
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
