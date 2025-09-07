import { useActionState } from 'react';

type State = {
  count: number;
  name: string;
  message?: string;
};

async function increment(previousState: State, formData: FormData) {
  console.log(formData.get('age'), previousState);
  const random = Math.random();
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return { ...previousState, count: previousState.count + 1, message: random > 0.5 ? 'success' : 'failed' };
}
export default function UseActionState() {
  const [state, formAction, isPending] = useActionState(increment, { count: 0, name: 'hello', message: '' });
  return (
    <form>
      <p>Count: {state.count}</p>
      <p>Message: {state.message}</p>
      <fieldset>
        <legend>Profile</legend>
        <label>
          Name: <input name="name" defaultValue={state.name} />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Age: <input name="age" defaultValue={12} />
        </label>
      </fieldset>
      <button type="submit" formAction={formAction} disabled={isPending}>
        Increment
      </button>
    </form>
  );
}