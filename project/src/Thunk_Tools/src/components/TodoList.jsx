import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, checkTodo }) => (
  <ul>
    {todos &&
      todos.map(({ text, id, done }) => (
        <TodoItem
          checkTodo={() => {
            checkTodo({ text, id, done: !done });
          }}
          key={id}
          text={text}
          done={done}
        />
      ))}
  </ul>
);
