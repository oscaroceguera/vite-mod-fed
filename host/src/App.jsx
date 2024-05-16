import { useState } from "react";
import "./App.css";

import Button from "remoteApp/Button";
import useStore from "remoteApp/state";

function App() {
  const [count, setCount] = useStore();

  return (
    <>
      <h1>Host Application</h1>
      <Button />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
