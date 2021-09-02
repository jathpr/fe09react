import { useDispatch } from "react-redux";

export const Change = () => {
  const dispatch = useDispatch();
  const change = () => dispatch({ type: "Hello" });
  return <button onClick={change}>change</button>;
};
