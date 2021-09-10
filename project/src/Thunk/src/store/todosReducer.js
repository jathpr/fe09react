import {
  ADD_TODO,
  SET_TODOS,
  GET_TODOS,
  CHECK_TODO,
  DELETE_TODO,
} from "./actionTypes";

const State = {
  initial: 0,
  loading: 1,
  loaded: 2,
};

const initialState = {
  list: [],
  loadingState: State.initial,
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODOS:
      return { ...state, list: action.todos, loadingState: State.loaded };
    case ADD_TODO:
      return { ...state, list: [...state.list, action.todo] };
    case DELETE_TODO:
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };
    case GET_TODOS:
      return { ...state, loadingState: State.loading };
    case CHECK_TODO:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.todo.id) {
            return action.todo;
          }
          return item;
        }),
      };
    default:
      return state;
  }
};
