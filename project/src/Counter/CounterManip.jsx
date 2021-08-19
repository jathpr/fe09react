import { useContext } from "react";
import { CounterManipContext } from "./App";

export const CounterManip = () => {
  const { plus, minus } = useContext(CounterManipContext);
  return (
    <>
      <button onClick={plus}>Add</button>
      <button onClick={minus}>Minus</button>
    </>
  );
};
