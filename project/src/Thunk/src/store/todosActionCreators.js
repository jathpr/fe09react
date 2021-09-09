import * as types from "./actionTypes";

export const addTodo = (todo) => async (dispatch) => {
  const todoUrl = new URL("http://localhost:3033/todos");
  const response = await fetch(todoUrl, {
    method: "POST",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  dispatch({ type: types.ADD_TODO, todo: data });
};
export const getTodos = () => async (dispatch) => {
  dispatch(getTodosStarted());

  // const delay = new Promise((resolve, reject) =>
  //   setTimeout(() => {
  //     resolve();
  //   }, 1500)
  // );
  // await delay;

  const todoUrl = new URL("http://localhost:3033/todos");
  const resp = await fetch(todoUrl);
  const data = await resp.json();
  dispatch(setTodos(data));
};

export const checkTodo = (todo) => async (dispatch) => {
  const todoUrl = new URL(`http://localhost:3033/todos/${todo.id}`);
  const response = await fetch(todoUrl, {
    method: "PUT",
    body: JSON.stringify(todo),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  dispatch({ type: types.CHECK_TODO, todo: data });
};

const setTodos = (todos) => ({ type: types.SET_TODOS, todos });
const getTodosStarted = () => ({ type: types.GET_TODOS });
