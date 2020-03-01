import React, { Component } from "react";
import Landing from "./Landing";
import { makeStyles } from "@material-ui/core/styles";

export default class Landing1 extends Component {
  constructor() {
    super();
    this.state = {
      backgroundColor: "White"
    };
  }
  callback = value => {
    // do something with value in parent component, like save to state
    if (value == "Coder") {
      this.setState({
        backgroundColor: "White"
      });
    }
    if (value == "Hacker") {
      this.setState({
        backgroundColor: "#372963"
      });
    }
    if (value == "Education") {
      this.setState({
        backgroundColor: "White"
      });
    }
  };

  render() {
    const styles = {
      containerStyle: {
        backgroundColor: this.state.backgroundColor
      }
    };
    const { containerStyle } = styles;
    return (
      <div>
        <Landing
          style={containerStyle}
          parentCallback={this.callback}
        ></Landing>
      </div>
    );
  }
}
