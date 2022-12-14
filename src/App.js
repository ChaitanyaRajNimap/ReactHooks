import "./App.css";
import React from "react";
import ComponentC from "./Components/ComponentC";
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

export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

function App() {
  return (
    <div className="App">
      <h1>React Hooks</h1>
      <UserContext.Provider value={"Tony"}>
        <ChannelContext.Provider value={"Stark"}>
          <ComponentC />
        </ChannelContext.Provider>
      </UserContext.Provider>
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
  );
}

export default App;
