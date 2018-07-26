import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faClipboard, faMoon, faStepBackward, faSyncAlt } from '@fortawesome/free-solid-svg-icons';

class Swatch extends Component {
  state = {
    copying: false,
    current: null,
    darkness: false,
    previous: [],
  }

  backClasses = () => {
    return this.state.previous.length === 0 ? "card-footer-item disabled-button" : "card-footer-item back-button";
  }

  onBack = () => {
    var { previous } = this.state;
    const last = previous.pop();

    if (last) {
      this.props.onBack(last);

      this.setState({ current: last, previous: previous });
    }
  }

  onCopy = () => {
    this.setState({ copying: true });

    setTimeout(() => {
      this.setState({ copying: false });
    }, 600);
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

  toggleDarkness = () => {
    const darkness = document.body.classList.value.includes("darkness");
    if (darkness) {
      document.body.classList.remove("darkness");
    } else {
      document.body.classList.add("darkness");
    }
  }

  componentWillMount() {
    this.onGenerate();
  }

  render() {
    return (
      <div className="card" style={this.props.style()}>
        <div className="card-content color-box">
          <FontAwesomeIcon className="moon" icon={faMoon} onClick={this.toggleDarkness} style={{cursor: "pointer"}} />
        </div>
        <div className="card-content color-info" style={{backgroundColor: "#fff"}}>
          {this.props.children}
        </div>
        <footer className="card-footer">
          <p className={this.backClasses()} onClick={this.onBack}>
          <span className="icon">
            <FontAwesomeIcon icon={faStepBackward} />
          </span>
          </p>
          <p className="card-footer-item generate-button" onClick={this.onGenerate}>
            <span className="icon">
              <FontAwesomeIcon icon={faSyncAlt} />
            </span>
          </p>
          <CopyToClipboard text={this.copyedText()} onCopy={this.onCopy}>
            <p className="card-footer-item copy-button">
              <span className="icon">
                <FontAwesomeIcon icon={this.state.copying ? faCheck : faClipboard} />
              </span>
            </p>
          </CopyToClipboard>
        </footer>
      </div>
    );
  }
}

export default Swatch;
