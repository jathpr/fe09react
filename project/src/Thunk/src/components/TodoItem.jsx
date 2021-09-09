import React from "react";
import styles from "./todoItem.module.css";

export const TodoItem = ({ text, done, checkTodo }) => (
  <li className={styles.container}>
    <input
      type="checkbox"
      checked={done}
      onChange={() => {
        checkTodo();
      }}
    />
    <h1>{text}</h1>
  </li>
);
