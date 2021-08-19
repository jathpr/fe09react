import { useEffect, useState } from "react";

export const useUpdate = () => {
  useEffect(() => {
    console.log("Was update");
  });
};

export const useMount = () => {
  useEffect(() => {
    console.log("Was rendered");
  }, []);
};

export const useCounter = () => {
  const [val, setVal] = useState(0);

  return { val, increment: () => setVal(val + 1) };
};
