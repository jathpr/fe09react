import { useState } from "react";
import { useSetValue } from "./Provider";
import { Test } from "./Test";

export const Child = ({ name, children, onClick }) => {
  const [inputVal, setInputVal] = useState("");
  const setVal = useSetValue();
  return (
    <div style={{ margin: "10px" }}>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder={name}
      />
      <button
        onClick={() => {
          setVal(inputVal);
          setInputVal("");
          onClick && onClick();
        }}
      >
        Clear {name}
      </button>
      <Test />
      {children}
    </div>
  );
};
