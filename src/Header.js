import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import { Helmet } from "react-helmet";

import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      display: true,
      textColor: "black",
      hiddenColor: "gray"
    };
  }
  componentDidMount() {
    if (this.props.text == "I am a coder") {
      this.setState({ textColor: "black", hiddenColor: "gray" });
    } else if (this.props.text == "I am a hacker") {
      this.setState({ textColor: "#00FF9C", hiddenColor: "#372963" });
    }
  }
  reset() {
    setTimeout(() => {
      this.setState({
        display: !this.state.display
      });
    }, 3000);
  }
  render() {
    var display;
    if (this.state.display) {
      display = <Typist>{this.props.text}</Typist>;
      this.reset();
    } else {
      display = (
        <div style={{ fontSize: "500%", color: this.state.hiddenColor }}>
          {this.props.text}
        </div>
      );
      this.reset();
    }
    return (
      <div>
        <Helmet>
          <style>{".Typist { color: " + this.state.textColor + "; }"}</style>
        </Helmet>
        {display}
      </div>
    );
  }
}
