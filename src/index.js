import React from 'react';
import { createRoot } from 'react-dom/client';
import Clock from './components/Clock';
import HelloReact from './components/HelloReact';
import LearnPortal from './components/LearnPortal';

import App from './App';
import './index.css';


const root = createRoot(document.getElementById('root'));
// root.render(<LearnPortal />)
root.render(<App />)

/* function tick() {
  root.render(<Clock date={new Date()} />);
} */

// setInterval(tick, 1000);


/* import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
