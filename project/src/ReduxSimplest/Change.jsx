import { useDispatch } from "react-redux";
import { hello } from "./store/actionTypes";

export const Change = () => {
  const dispatch = useDispatch();
  const change = () => dispatch({ type: hello });
  return <button onClick={change}>change</button>;
};
