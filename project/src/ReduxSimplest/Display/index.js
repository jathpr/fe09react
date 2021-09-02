import { connect } from "react-redux";
import { DisplayComponent } from "./DisplayComponent";

export const Display = connect((store) => store)(DisplayComponent);
