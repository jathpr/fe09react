import { useState } from "react";
import { updateTodo } from "../Requests";

export const ListItem = ({ listItem: { todo, id }, onUpdate }) => {
  const [item, setItem] = useState(todo);

  const handleEdit = async () => {
    await updateTodo(id, item);
    onUpdate();
  };

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value);
        }}
      />
      <button onClick={() => {}}> Dell</button>
      <button onClick={handleEdit}> Update</button>
    </div>
  );
};
