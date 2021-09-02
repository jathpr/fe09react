import { connect } from "react-redux";

const DisplayComponent = ({ value }) => <div>{value}</div>;
export const Display = connect((store) => ({ value: store }))(DisplayComponent);
