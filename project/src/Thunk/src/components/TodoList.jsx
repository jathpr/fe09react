import React from "react";
import { useDispatch } from "react-redux";
import { checkTodo, deleteTodo } from "../store/todosActionCreators";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {todos &&
        todos.map(({ text, id, done }) => (
          <TodoItem
            checkTodo={() => {
              dispatch(checkTodo({ text, id, done: !done }));
            }}
            deleteTodo={() => {
              dispatch(deleteTodo({ id }));
            }}
            key={id}
            text={text}
            done={done}
          />
        ))}
    </ul>
  );
};
