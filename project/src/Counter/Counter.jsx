import { useCounterContext } from "./useCounter";

export const Counter = () => {
  const { counter } = useCounterContext();
  return <div>Counter {counter}</div>;
};
