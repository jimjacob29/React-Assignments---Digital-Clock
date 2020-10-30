import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.timerId = null;
    this.tick = this.tick.bind(this);
    this.state = { currentTime: new Date().toLocaleTimeString() };
  }
  tick() {
    this.setState({ currentTime: new Date().toLocaleTimeString() });
  }
  componentDidMount() {
    this.timerId = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timerId);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.currentTime}</h3>
      </div>
    );
  }
}

export default App;
