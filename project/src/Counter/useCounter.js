import { createContext, useContext, useReducer } from "react";

export const CounterContext = createContext();

const reducer = (state, action) => {
  if (action.type === "plus") {
    return { counter: state.counter++ };
  }
  if (action.type === "minus") {
    return { counter: state.counter-- };
  }
  return state;
};

export const useCounterContext = () => {
  const value = useContext(CounterContext);
  return { counter: value };
};

export const useCounter = () => {
  const [counterState, counterDispatch] = useReducer(reducer, { counter: 0 });
  const plus = () => {
    counterDispatch({ type: "plus" });
  };
  const minus = () => {
    counterDispatch({ type: "minus" });
  };
  return { plus, minus, counter: counterState.counter };
};
