import { create } from 'zustand';

type CounterState = {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

type User = {
  name: string;
};

type UserStoreState = {
  user: User | null;
  setName: (name: string) => void;
};
export const userStore = create<UserStoreState>((set) => ({
  user: null,
  setName: (name) => set((state) => ({ user: { ...state.user, name } })),
}));

