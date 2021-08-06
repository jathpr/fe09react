import { useState } from "react";

export const ListItem = ({ listItem: { item, id }, onUpdate }) => {
  const [todo, setTodo] = useState(item);

  const handleEdit = async () => {
    await fetch(`http://localhost:3033/list/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item: todo }),
    });
    onUpdate();
  };

  return (
    <div>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={() => {}}> Dell</button>
      <button onClick={handleEdit}> Update</button>
    </div>
  );
};
