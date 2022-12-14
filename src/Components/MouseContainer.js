import React, { useState } from "react";
import UseEffectOnce from "./UseEffectOnce";

function MouseContainer() {
  const [display, setDisplay] = useState(true);

  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle display</button>
      {display && <UseEffectOnce />}
    </div>
  );
}

export default MouseContainer;
