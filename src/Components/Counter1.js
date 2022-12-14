import React, { useReducer } from "react";

const initialState = 0;
const reducer = (currState, action) => {
  switch (action) {
    case "increment":
      return currState + 1;
    case "decrement":
      return currState - 1;
    case "reset":
      return initialState;
    default:
      return currState;
  }
};

function Counter1() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button onClick={() => dispatch("reset")}>Reset</button>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
    </div>
  );
}

export default Counter1;
