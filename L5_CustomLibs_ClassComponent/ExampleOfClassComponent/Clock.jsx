import { Component } from "react";
import { format } from "date-fns";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  handle = () => {
    this.setState({ date: new Date() });
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {}

  tick() {
    this.setState({
      date: new Date(),
    });
    this.setState({
      wether: this.state.date,
    });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  render() {
    return (
      <div>
        <button onClick={this.handle}>Hello</button>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {format(this.state.date, "'Today is a' eeee")}.</h2>
      </div>
    );
  }
}

const Clock2 = (props) => (
  <div>
    <h1>Привет, мир!</h1>
    <h2>Сейчас {props.date.toLocaleTimeString()}.</h2>
  </div>
);
