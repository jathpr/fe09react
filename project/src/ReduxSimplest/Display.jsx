import { useSelector } from "react-redux";

export const Display = () => {
  const value = useSelector((state) => state.value);
  return <div>{value}</div>;
};
