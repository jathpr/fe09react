import { useState } from "react";
import { addTodo } from "../Requests";

export const AddItem = ({ updateDetector }) => {
  const [item, setItem] = useState("");

  const handleAdd = async () => {
    await addTodo(item);
    updateDetector();
  };

  const handleInput = (e) => {
    setItem(e.target.value);
  };

  return (
    <div>
      <input type="text" value={item} onChange={handleInput} />
      <button onClick={handleAdd}> Add</button>
    </div>
  );
};
