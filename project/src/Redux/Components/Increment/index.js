import { connect } from "react-redux";
import { FirstComponentChange } from "./FirstComponentChange";

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: "INCREMENT2" });
    },
  };
};

export const Increment = connect(
  null,
  mapDispatchToProps
)(FirstComponentChange);
