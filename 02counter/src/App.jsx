import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(0)

  

  const addValue = () => {
   setcounter(count => count +1)
   setcounter(count => count +1)
   setcounter(count => count +1)
   setcounter(count => count +1)
    if(counter >=20)
    {
      setcounter(20);
    }
  };

  const remValue = () => {
  setcounter(counter-1)
    if(counter <=0)
    {
      setcounter(0);
    }
  };
  return (
    <>
      <h1>Hello</h1>
      <h2>Counter value : {counter}</h2>

      <button id="inc" onClick={addValue}>
        Click to increase
      </button>
      <br />
      <br />
      <button id="dec" onClick={remValue}>
        Click to decrease
      </button>
    </>
  );
}

export default App;
