import { createContext } from "react";
import { Counter } from "./Counter";
import { CounterManip } from "./CounterManip";
import { CounterContext, useCounter } from "./useCounter";
import { useInput } from "./useInput";

export const CounterManipContext = createContext();

export const App = () => {
  const inputProps = useInput();
  const { onChange, value } = useInput();
  const { counter, plus, minus } = useCounter();

  // const counter = useCounter()
  return (
    <CounterContext.Provider value={counter}>
      <CounterManipContext.Provider value={{ plus, minus }}>
        <Counter></Counter>
        <input {...inputProps}></input>
        <input value={value} onChange={onChange}></input>
        <CounterManip />
      </CounterManipContext.Provider>
    </CounterContext.Provider>
  );
};
