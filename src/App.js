import { useState, useEffect } from 'react';
import init, { add } from "wasm-lib";

function App() {
  const [ans, setAns] = useState(0);
  useEffect(() => {
    init().then(() => {
      setAns(add(1, 1));
    })
  }, []);
  return (
    <div className="App">
      <header className="WASM Security Toolkit">
          1 + 1 = {ans}
      </header>
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
