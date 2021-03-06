import React, { useEffect } from "react";
import { TodoList } from "../../components/TodoList";
import { AddTodo } from "../../components/AddTodo";

export const TodoComponent = ({ todos, addTodo, getTodos, checkTodo }) => {
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <header>ToDo List</header>
      <TodoList todos={todos} checkTodo={checkTodo} />
      <AddTodo addTodo={addTodo} />
    </>
  );
};
