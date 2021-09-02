import { connect } from "react-redux";

const DisplayComponent = ({ value }) => <div>{value}</div>;

export const Display = connect((store) => store)(DisplayComponent);
