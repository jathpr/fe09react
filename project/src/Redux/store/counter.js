const initialState = { counter: 0, counter2: 0, smth: [] };

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "INCREMENT2":
      return { ...state, counter2: state.counter2 + 1 };
    default:
      return state;
  }
};
