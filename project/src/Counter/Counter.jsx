export const Counter = () => {
  const [value, changeValue] = useReducer(reducer, {0});

  
  return <div>Counter</div>;
};
