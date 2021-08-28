import { useState } from "react";
import { useValue } from "./Provider";

export const Test = ({ name }) => {
  const [inputVal, setInputVal] = useState("");
  useValue();
  return (
    <div style={{ margin: "10px" }}>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder={"test " + name}
      />
    </div>
  );
};
