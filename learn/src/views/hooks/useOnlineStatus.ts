import { useSyncExternalStore } from 'react';

function subscribe(callback: () => void) {
  globalThis.addEventListener('online', callback);
  globalThis.addEventListener('offline', callback);
  return () => {
    globalThis.removeEventListener('online', callback);
    globalThis.removeEventListener('offline', callback);
  };
}

function getSnapshot() {
  return navigator.onLine;
}

function getServerSnapshot() {
  return true;
}


export default function useOnlineStatus() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}