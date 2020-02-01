import React from "react";
import logDefinition from "./utils/logDefinition";

function App() {
  return (
    <div className="App">
      <p onClick={logDefinition}>
        <span>Long</span> <span>live</span> <span>the</span> <span>king</span>!
      </p>
    </div>
  );
}

export default App;
