import React, { useContext } from "react";
import { CountContext } from "../App";

function CompA() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div>Comp A - {countContext.countState}</div>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
      <button onClick={() => countContext.countDispatch("increment")}>
        Increment
      </button>
      <button onClick={() => countContext.countDispatch("decrement")}>
        Decrement
      </button>
    </div>
  );
}

export default CompA;
