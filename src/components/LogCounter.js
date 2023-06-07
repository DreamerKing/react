import React, { useState, useRef, useEffect } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(count + 1);
  };

  const countRef = useRef(count);

  useEffect(() => {
    countRef.current = count;
  }, [count])

  const handleLogCount = () => {
    setTimeout(() => {
      console.log(count);
      console.log('countRef:', countRef.current);
    }, 3000);
  }

  return (
    <div>
      <p>current:{count}</p>
      <button onClick={handleCount}>Click</button>
      <button onClick={handleLogCount}>Log Click</button>
    </div>
  )
}
