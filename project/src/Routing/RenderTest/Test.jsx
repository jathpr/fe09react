import { useState } from "react";
import { useSetValue, useValue } from "./Provider";

export const Test = ({ name }) => {
  const [inputVal, setInputVal] = useState("");
  // useValue();
  useSetValue();
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
