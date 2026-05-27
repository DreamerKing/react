let nextId = 0;
let todos: Todo[] = [];
let listeners: (() => void)[] = [];

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

function emitChange() {
  listeners.forEach(listener => listener());
}

export const todoStore = {
  subscribe: (listener: () => void) => {
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },
  getSnapshot: () => todos,
  addTodo: () => {
    todos = [...todos, { id: nextId, text: `Todo ${nextId}`, completed: false }];
    nextId++;
    emitChange();
  },
  editTodo: (id: number, text: string) => {
    todos = todos.map(t => (t.id === id ? { ...t, text } : t));
    emitChange();
  },
  toggleTodo: (id: number) => {
    todos = todos.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    emitChange();
  },
  removeTodo: (id: number) => {
    todos = todos.filter(t => t.id !== id);
    emitChange();
  }
};

export default todoStore;