import React, { Component } from "react";
import Swatch from "./Swatch";
import * as Random from "../utils/random";
import { Link } from "react-router-dom";

class Colors extends Component {
  state = {
    color: "",
  };

  onGenerate = () => {
    const newColor = Random.hex();
    this.setState({ color: newColor });
    return { color: newColor };
  };

  onBack = (newState) => {
    this.setState(newState);
  };

  render() {
    return (
      <Swatch
        onBack={this.onBack}
        onGenerate={this.onGenerate}
        style={{ backgroundColor: this.state.color }}
      >
        <div className="is-uppercase">
          <Link to={`/colors/${this.state.color.replace("#", "")}`}>
            {this.state.color}
          </Link>
        </div>
      </Swatch>
    );
  }
}

export default Colors;
