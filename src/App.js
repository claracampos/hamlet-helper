import React from "react";
import logDefinition from "./utils/logDefinition";

function App() {
  return (
    <div className="App">
      <p className="word-split" onClick={logDefinition}>
        This is an example. You are testing.
      </p>
    </div>
  );
}

export default App;
