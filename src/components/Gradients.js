import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons';
import Swatch from './Swatch';
import * as Random from '../utils/random';
import { Link } from 'react-router-dom';

class Gradients extends Component {
  state = {
    callback: null,
    colors: ['', ''],
    degrees: 0
  }

  compassTimeout = () => {
    let newDegrees;
    if (this.state.degrees === 360) {
      newDegrees = 1;
    } else {
      newDegrees = this.state.degrees + 1;
    }
    const callback = setTimeout(this.compassTimeout, 100);
    this.setState({ callback: callback, degrees: newDegrees });
  }

  onGenerate = () => {
    const { colors, degrees } = Random.gradient(2);

    clearTimeout(this.state.callback);

    const callback = setTimeout(this.compassTimeout, 15000);

    this.setState({ callback: callback, colors: colors, degrees: degrees });

    return { colors: colors, degrees: degrees };
  }

  componentWillUnmount = () => {
    clearTimeout(this.state.callback);
  }

  onBack = (newState) => {
    this.setState(newState);
  }

  render() {
    const bgStyle = {background: "linear-gradient(" + this.state.degrees + "deg, " + this.state.colors.join(",") + ")"};

    return (
      <Swatch onBack={this.onBack} onGenerate={this.onGenerate} style={bgStyle}>
        <div className="columns is-mobile is-gapless">
          <div className="column is-uppercase">
            <Link to={`/colors/${this.state.colors[0].replace("#", "")}`}>
              {this.state.colors[0]}
            </Link>
          </div>
          <div className="column is-narrow"><FontAwesomeIcon color="grey" icon={faLocationArrow} size="xs" transform={{rotate: this.state.degrees - 45}} /></div>
          <div className="column is-uppercase">
            <Link to={`/colors/${this.state.colors[1].replace("#", "")}`}>
              {this.state.colors[1]}
            </Link>
          </div>
        </div>
      </Swatch>);
  }
}

export default Gradients;
