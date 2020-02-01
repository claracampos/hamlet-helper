import React from "react";
import logSynonym from "./components/logSynonym";

function App() {
  return (
    <div className="App">
      <p onClick={logSynonym}>
        <span>This</span> <span>is</span> <span>a</span> <span>test</span>.
      </p>
    </div>
  );
}

export default App;
