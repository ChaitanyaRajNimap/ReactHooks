import "./App.css";
import React, { useReducer } from "react";
import CompA from "./Components/CompA";
import CompB from "./Components/CompB";
import CompC from "./Components/CompC";
// import MultipleUseReducer from "./Components/MultipleUseReducer";
// import Counter2 from "./Components/Counter2";
// import Counter1 from "./Components/Counter1";
// import ComponentC from "./Components/ComponentC";
// import DataFetching from "./Components/DataFetching";
// import IntervalClassCounter from "./Components/IntervalClassCounter";
// import IntervalHookCounter from "./Components/IntervalHookCounter";
// import MouseContainer from "./Components/MouseContainer";
// import ClassUseEffectOnce from "./Components/ClassUseEffectOnce";
// import UseEffectOnce from "./Components/UseEffectOnce";
// import UseEffectAfterRender from "./Components/UseEffectAfterRender";
// import ClassUseEffect from "./Components/ClassUseEffect";
// import HookCounterWithArray from "./Components/HookCounterWithArray";
// import HookCounterWithObj from "./Components/HookCounterWithObj";
// import HookCounter2 from "./Components/HookCounter2";
// import HookCounter from "./Components/HookCounter";
// import ClassCounter from "./Components/ClassCounter";

// export const UserContext = React.createContext();
// export const ChannelContext = React.createContext();

export const CountContext = React.createContext();

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ countState: count, countDispatch: dispatch }}
    >
      <div className="App">
        <h1>React Hooks</h1>
        <h2>Count - {count}</h2>
        <CompA />
        <CompB />
        <CompC />
        {/* <MultipleUseReducer /> */}
        {/* <Counter2 /> */}
        {/* <Counter1 /> */}
        {/* <UserContext.Provider value={"Tony"}>
        <ChannelContext.Provider value={"Stark"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
        {/* <DataFetching /> */}
        {/* <IntervalClassCounter /> */}
        {/* <IntervalHookCounter /> */}
        {/* <MouseContainer /> */}
        {/* <ClassUseEffectOnce /> */}
        {/* <UseEffectOnce /> */}
        {/* <UseEffectAfterRender /> */}
        {/* <ClassUseEffect /> */}
        {/* <HookCounterWithArray /> */}
        {/* <HookCounterWithObj /> */}
        {/* <HookCounter2 /> */}
        {/* <HookCounter /> */}
        {/* <ClassCounter /> */}
      </div>
    </CountContext.Provider>
  );
}

export default App;
