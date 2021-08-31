import { connect } from "react-redux";
import { SecondComponent } from "../Second/SecondComponent";

const mapStateToProps = (state) => ({
  counter: state.counter2.counter,
});

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {
      dispatch({ type: "INCREMENT2" });
    },
  };
};

export const First = connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondComponent);
