import { createContext, useState, useContext, useEffect, memo } from 'react';

const ThemeContext = createContext('light');

function Parent() {
  useEffect(() => {
    console.log('Parent component rendered');
  });
  return (
    <div>
      <h1>Parent Component</h1>
      <MemoChild />
    </div>
  );
}

function Child() {
  useEffect(() => {
    console.log('Child component rendered');
  });
  const theme = useContext(ThemeContext);
  return (
    <div>
      {theme}
    </div>
  );
}

const MemoChild = memo(() => {
  useEffect(() => {
    console.log('Child component rendered');
  });
  const theme = useContext(ThemeContext);
  return (
    <div>
      {theme}
    </div>
  );
});

function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
      <Parent/>
    </ThemeContext.Provider>
   );
}

export default App;

