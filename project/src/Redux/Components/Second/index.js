import { SecondComponent } from "./SecondComponent";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    counter: state.counter.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: "INCREMENT" });
    },
  };
};

export const Second = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondComponent);
