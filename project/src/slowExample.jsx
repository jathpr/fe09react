import React from "react";
import { memo } from "react";
import { useCounter, useUpdate } from "./useUpdate";

function sleep(time) {
  const done = Date.now() + time;
  while (done > Date.now()) {
    // sleep...
  }
}

// imagine that this slow component is actually slow because it's rendering a
// lot of data (for example).
const SlowComponent = ({ time, onChange }) => {
  sleep(time);
  return (
    <div>
      Wow, that was{" "}
      <input
        value={time}
        type="number"
        onChange={(e) => onChange(Number(e.target.value))}
      />
      ms slow
    </div>
  );
};
function DogName({ time }) {
  useUpdate();
  const { increment, val } = useCounter();
  const c2 = useCounter();

  const [dog, setDog] = React.useState("");
  // const handleSleep = (sleep, [time]);
  // handleSleep(time);
  return (
    <div>
      <label htmlFor="dog" onClick={increment}>
        Dog Name {val} {c2.val}
      </label>
      <br />
      <input id="dog" value={dog} onChange={(e) => setDog(e.target.value)} />
      <p onClick={c2.increment}>
        {dog ? `${dog}'s favorite number is ${time}.` : "enter a dog name"}
      </p>
    </div>
  );
}
export function App() {
  // this is "global state"

  const [time, setTime] = React.useState(200);
  return (
    <div>
      <DogName time={time} />
      <SlowComponent time={time} onChange={setTime} />
    </div>
  );
}
