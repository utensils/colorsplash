import React, { Component } from 'react';
import Swatch from './Swatch';
import * as Random from '../utils/random';

class Colors extends Component {
  state = {
    color: null
  }

  onGenerate = () => {
    const newColor = Random.hex();
    this.setState({ color: newColor });

    return { color: newColor };
  }

  onBack = (newState) => {
    this.setState(newState);
  }

  render() {
    return (
      <Swatch onBack={this.onBack} onGenerate={this.onGenerate} style={{backgroundColor: this.state.color}}>
        <div className="is-uppercase">
          {this.state.color}
        </div>
      </Swatch>);
  }
}

export default Colors;
