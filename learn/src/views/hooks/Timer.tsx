// import {  experimental_useEffectEvent as useEffectEvent } from 'react/react-experimental';
import { useState, useEffect } from 'react'

export default function Timer() {
  const [count, setCount] = useState(0);
  /* const setTimer = useEffectEvent(() => {
    const id = setInterval(() => {
      console.log('⏰ Interval');
      setCount(c => c + 1);
    }, 1000);
    return id;
  });

  useEffect(() => {
    console.log('✅ 创建定时器');
    const id = setTimer();
    return () => {
      console.log('❌ 清除定时器');
      clearInterval(id);
    };
  }, []); */

  return <h1>计数器: {count}</h1>
}
