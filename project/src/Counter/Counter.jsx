export const Counter = () => {
  const [value, changeValue] = useReducer(reducer);
  return <div>Counter</div>;
};
