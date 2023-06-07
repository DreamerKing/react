import { useState, useRef, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(new Date());
  const timeRef = useRef();
  useEffect(() => {
    timeRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(timeRef.current);
    }
  });

  function handClick() {
    timeRef.current && clearInterval(timeRef.current);
  }
  return (<div>
    <p>{time.toString()}</p>
    <button onClick={handClick}>Clear</button>
  </div>)
}