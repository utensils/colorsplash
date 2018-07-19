import React, { Component } from 'react';
import Swatch from './Swatch';
import Random from '../utils/random';

class Gradients extends Component {
  state = {
    colors: [],
    degrees: 0
  }

  compassStyles = () => {
    const { degrees } = this.state;
    const deg = degrees - 45;

    return {
      MozTransform: "rotate(" + deg + "Deg)",
      MsTransform: "rotate(" + deg + "Deg)",
      OTransform: "rotate(" + deg + "Deg)",
      WebkitTransform: "rotate(" + deg + "Deg)",
      transform: "rotate(" + deg + "Deg)"
    }
  }

  onGenerate = () => {
    const { colors, degrees } = Random.gradient(2);

    this.setState({ colors: colors, degrees: degrees });

    return { colors: colors, degrees: degrees };
  }

  style = () => {
    return { background: "linear-gradient(" + this.state.degrees + "deg, " + this.state.colors.join(",") + ")" }
  }

  render() {
    return (
      <Swatch onBack={(newState) => this.setState(newState)} onGenerate={this.onGenerate} style={this.style}>
        <div className="content is-uppercase">
          {this.state.colors.join(" ▸ ")} <i className="fas fa-location-arrow" style={this.compassStyles()}></i>
        </div>
      </Swatch>);
  }
}

export default Gradients;
