import { createContext, useState } from "react";
import { Child } from "./Child";
import { Navigation } from "./Navigation";
import { Test } from "./Test";

const Context = createContext();

export const Page = () => {
  const [state, setState] = useState(0);
  return (
    <Context.Provider value={state}>
      <Navigation />
      <Child name={1}>
        <Child name={2} />
      </Child>
      <Child name={3}>
        <Child
          name={4}
          onClick={() => {
            setState(state + 1);
          }}
        >
          <Child name={5}>
            <Child name={6}>
              <Child name={7} />
            </Child>
          </Child>
        </Child>
        <Child name={8}>
          <Child name={9}>
            <Test />
            <Child name={0} />
          </Child>
          <Child name={"KuKU"} />
        </Child>
      </Child>
    </Context.Provider>
  );
};
