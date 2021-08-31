import { connect } from "react-redux";
import { FirstComponentShow } from "./FirstComponentShow";

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export const Show = connect(mapStateToProps)(FirstComponentShow);
