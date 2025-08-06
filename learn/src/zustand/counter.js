import { create } from 'zustand';
import { persist, devtools } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';


export const useCounterStore = create()(
  devtools(
    persist(
      logger(
      immer((set) => ({
        count: 0,
        increment: () => set((state) => { state.count += 1; }),
        decrement: () => set((state) => { state.count -= 1; }),
        reset: () => set({ count: 0 }),
      }),
        {
          name: 'counter-storage',
          getStorage: () => localStorage,
        }
      ))
    )
  )
)

function logger(config) {
  return (set, get, api) => config((...args) => {
    console.log('Applying state change:', args);
    set(...args);
    console.log('New state:', get());
  }, get, api);
}