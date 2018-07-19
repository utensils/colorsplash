import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

class Swatch extends Component {
  state = {
    copying: false,
    current: null,
    previous: [],
  }

  onBack = () => {
    var { previous } = this.state;
    const last = previous.pop();

    this.props.onBack(last);

    this.setState({ current: last, previous: previous });
  }

  onCopy = () => {
    this.setState({ copying: true });

    setTimeout(() => {
      this.setState({ copying: false });
    }, 500);
  }

  onGenerate = () => {
    let { current, previous } = this.state;

    if (current) {
      previous.push(current);
    }

    this.setState({ current: this.props.onGenerate(), previous: previous });
  }

  copyedText = () => {
    const [ value ] = Object.values(this.props.style());
    return value;
  }

  componentWillMount() {
    this.onGenerate();
  }

  render() {
    return (
      <div className="card" style={this.props.style()}>
        <div className="card-content color-box">

        </div>
        <div className="card-content" style={{fontSize: "1.8rem", fontFamily: "'Rajdhani', sans-serif", fontWeight: "700", backgroundColor: "#fff"}}>
          {this.props.children}
        </div>
        <footer className="card-footer">
          <p className="card-footer-item back-button" onClick={this.onBack}>
          <span className="icon">
            <i className="fas fa-step-backward"></i>
          </span>
          </p>
          <p className="card-footer-item generate-button" onClick={this.onGenerate}>
            <span className="icon">
              <i className="fas fa-sync-alt"></i>
            </span>
          </p>
          <CopyToClipboard text={this.copyedText()} onCopy={this.onCopy}>
            <p className="card-footer-item copy-button">
              <span className="icon">
                <i className="fas fa-clipboard"></i>
              </span>
            </p>
          </CopyToClipboard>
        </footer>
      </div>
    );
  }
}

export default Swatch;
