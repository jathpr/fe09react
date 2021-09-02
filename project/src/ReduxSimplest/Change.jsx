import { connect } from "react-redux";

const ChangeComponent = ({ change }) => {
  return <button onClick={change}>change</button>;
};

export const Change = connect(null, (dispatch) => ({
  change: () => dispatch({ type: "Hello" }),
}))(ChangeComponent);
