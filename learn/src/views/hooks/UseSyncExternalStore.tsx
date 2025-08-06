import { useSyncExternalStore } from 'react';
import todoStore from './todoStore.ts';
import useOnlineStatus from './useOnlineStatus.ts';


function StatusBar() {
  const isOnline = useOnlineStatus();
  return isOnline ? '✅ Online' : '❌ Offline';
}

export default function UseSyncExternalStore() {
  const todos = useSyncExternalStore(todoStore.subscribe, todoStore.getSnapshot);
  return (
    <div>
      <button onClick={todoStore.addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} onClick={() => todoStore.removeTodo(todo.id)}>
            {todo.text} - {todo.completed ? 'Completed' : 'Pending'}
          </li>
        ))}
      </ul>
      <div>
        <StatusBar />
      </div>
    </div>
  );
}