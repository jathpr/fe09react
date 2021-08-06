import { useState } from "react";
export const AddItem = ({ updateDetector }) => {
  const [item, setItem] = useState("");
  const handleAdd = async () => {
    await addItemServer();
    updateDetector();
  };

  const addItemServer = async () =>
    await fetch("http://localhost:3033/list", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ item }),
    });

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
