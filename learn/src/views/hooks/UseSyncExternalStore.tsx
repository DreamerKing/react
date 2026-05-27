import { useState, useSyncExternalStore } from 'react';
import todoStore from './todoStore.ts';
import useOnlineStatus from './useOnlineStatus.ts';


function StatusBar() {
  const isOnline = useOnlineStatus();
  return isOnline ? '✅ Online' : '❌ Offline';
}

export default function UseSyncExternalStore() {
  const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot);
  const [editTodo, setEditTodo] = useState<{ id: number, text: string } | null>(null);
  const handleEditTodo = ({ id, text }: { id: number, text: string }) => {
    setEditTodo({ id, text });
  };
  const handleSaveTodo = ({ id, text }: { id: number, text: string }) => {
    todoStore.editTodo(id, text);
    setEditTodo(null);
  };
  return (
    <div className="flex flex-col items-center justify-left">
      <button className="rounded-md border-1 px-2 py-1 border-gray-300 text-blue-500 hover:bg-gray-100" onClick={todoStore.addTodo}>Add Todo</button>
      <ul className="list-none p-0 m-4">
        {todos.map((todo) => (
          <li key={todo.id} className="m-2 flex items-center justify-between">
            <button
              type="button"
              className="text-md mr-2"
              aria-label={todo.completed ? 'Mark as pending' : 'Mark as completed'}
              onClick={() => todoStore.toggleTodo(todo.id)}
            >
              {todo.completed ? '✅' : '⏳'}
            </button>
            {editTodo?.id === todo.id ? (
              <input
                className="border-1 border-gray-300 rounded-md px-2 py-1"
                type="text"
                value={editTodo.text}
                onChange={(e) => handleEditTodo({ id: todo.id, text: e.target.value })}
                onBlur={() => handleSaveTodo({ id: todo.id, text: editTodo.text })}
              />
            ) : (
              todo.text
            )}
            <button
              className="ml-2 rounded-md border-1 px-2 py-1 border-gray-300 text-green-500 hover:bg-gray-100"
              type="button"
              onClick={() => handleEditTodo({ id: todo.id, text: todo.text })}
            >
              Edit
            </button>
            <button
              className="ml-2 rounded-md border-1 px-2 py-1 border-gray-300 text-red-500 hover:bg-gray-100"
              type="button"
              onClick={() => todoStore.removeTodo(todo.id)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <div>
        <StatusBar />
      </div>
    </div>
  );
}