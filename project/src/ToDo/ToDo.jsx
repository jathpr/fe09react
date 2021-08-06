import { useEffect, useState } from "react";
import { AddItem } from "./Components/AddItem";
import { TodoList } from "./Components/TodoList";

export const ToDo = () => {
  const [list, setList] = useState([]);
  const [detector, setDetector] = useState({});

  useEffect(() => {
    const getList = async () => {
      const response = await fetch("http://localhost:3033/list");
      const result = await response.json();
      setList(result);
    };

    getList();
  }, [detector]);

  const updateDetector = () => {
    setDetector({});
  };

  return (
    <>
      <AddItem updateDetector={updateDetector} />
      <TodoList list={list} onUpdate={updateDetector} />
    </>
  );
};
