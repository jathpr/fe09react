const initialState = { counter: 0 };

export const counter2 = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT2":
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
};
