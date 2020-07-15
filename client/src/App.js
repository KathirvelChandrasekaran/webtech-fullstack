import React, { useState } from "react";
import "./App.css";
import PropD from "./propsdemo";
function App() {
  const [counter, setCounter] = useState(0);

  let increment = () => setCounter(counter + 1);
  let decrement = () => setCounter(counter - 1);
  return (
    <div className="App">
      <h1 style={{ backgroundColor: "red" }}>Hooks</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button> &nbsp;
      <button onClick={decrement}>Decrement</button>
      <PropD k={counter} />
    </div>
  );
}

export default App;
