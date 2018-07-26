import React, { Component } from 'react';
import Swatch from './Swatch';
import Random from '../utils/random';

class Colors extends Component {
  state = {
    color: null
  }

  onGenerate = () => {
    const newColor = Random.hex();
    this.setState({ color: newColor });

    return { color: newColor };
  }

  style = () => {
    return { backgroundColor: this.state.color };
  }

  render() {
    return (
      <Swatch onBack={(newState) => this.setState(newState)} onGenerate={this.onGenerate} style={this.style}>
        <div className="is-uppercase">
          {this.state.color}
        </div>
      </Swatch>);
  }
}

export default Colors;
