import React, { useState } from "react";
import ReactDOM from "react-dom";
import NumericInput from "../../src";

const App: React.FC = () => {
  const [val, setVal] = useState(0);
  return (
    <>
      <h1>Numeric Input React</h1>
      <NumericInput value={val} onChange={(v: number) => setVal(v)} />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("content"));
