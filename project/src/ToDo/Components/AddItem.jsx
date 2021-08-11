import { useState } from "react";
import { addTodo } from "../Requests";
import Button from "@material-ui/core/Button";

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
      <Button color="primary" variant="contained" onClick={handleAdd}>
        Add
      </Button>
    </div>
  );
};
