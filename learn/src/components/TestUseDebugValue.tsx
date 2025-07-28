import { useState, useDebugValue, useId, useDeferredValue} from 'react'
export default function TestUseDebugValue() {
  const isOnline = useOnlineStatus();
  const [count, setCount] = useState(0);
  const deferedCount = useDeferredValue(count);
  const id = useId();
  const handleClick = () => {
    setCount(count => count+1);
  }
  return (
    <div>useDebugValue {isOnline}
      <p>{count} DeferredValue { deferedCount}</p>
      <button onClick={handleClick}>Click { id }</button>
    </div>
  );
}

function useOnlineStatus() {
  const [isOnline, setIsOnline] = useState('online')
  useDebugValue(isOnline ? 'Online' : 'Offline');
  return isOnline
}