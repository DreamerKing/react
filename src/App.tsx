import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    new Promise<number>((resolve) => {
      setCount((count) => {
        const nextCount = count + 1;
        resolve(nextCount);
        return nextCount;
      });
    }).then((count) => {
      console.log("count: " + count);
    });
  };

  const url = "http://localhost";
  const path = "/base";
  const test = "";
  console.log("render:", count);
  console.log(`${url}${path}`);
  return (
    <>
      <div className="card">
        {!test && <p>new</p>}
        <button onClick={handleClick}>count is {count}</button>
      </div>
    </>
  );
}

export default App;
