import { useEffect, useState } from "react";

export default function useOnlineStatus() {
  const [status, setStatus] = useState(false)
  useEffect(() => {
    if (navigator.onLine) {
      setStatus(navigator.onLine)
    }

    function handleOnline() {
      setStatus(true)
    }

    function handleOffline() {
      setStatus(false);
    }

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    }
  }, []);

  return status
}