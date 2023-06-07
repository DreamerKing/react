import React, { useState, useRef, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  const preState = usePrevState(count);

  const preCountRef = useRef(0);
  const preCount = preCountRef.current;

  useEffect(() => {
    preCountRef.current = count;
  })

  return (
    <div>
      <p>current:{count}, prevous: {preCount} usePrevState:{preState}</p>
      <button onClick={handleCount}>Click</button>
    </div>
  )
}


function usePrevState(state) {
  const preCountRef = useRef(state);
  const preState = preCountRef.current;

  useEffect(() => {
    preCountRef.current = state;
  });
  return preState;
}