import UseSyncExternalStore from './views/hooks/UseSyncExternalStore';

export default function Root() {
  return (
    <div>
      <h1>Todo App</h1>
      <UseSyncExternalStore />
    </div>
  );
}