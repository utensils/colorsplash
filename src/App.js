import React, { Component } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';

var randomColor = function (){
  const color = '' + Math.floor(Math.random() * 16777215).toString(16);
  return '#' + color.padEnd(6, '0');
}

class App extends Component {
  state = {
    darkness: false,
    copied: false,
  }
  handleBack = () => {
    var { previousColors } = this.state;
    const lastColor = previousColors.pop();

    this.setState({ color: lastColor, previousColors: previousColors });
  }

  handleGenerate = () => {
    var { color, previousColors } = this.state;
    previousColors.push(color)

    this.setState({ color: randomColor(), previousColors: previousColors });
  }

  toggleDarkness = () => {
    this.setState({ darkness: !this.state.darkness });
    if (this.state.darkness) {
      document.body.classList.remove('darkness');
    } else {
      document.body.classList.add('darkness')
    }
  }

  componentWillMount() {
    this.setState({ color: randomColor(), previousColors: [] });
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-head">
          <nav className="navbar is-transparent" style={{paddingLeft: "12px", paddingTop: "12px"}}>
            <span className="icon moon" onClick={this.toggleDarkness} style={{ cursor: "pointer"}}>
              <i className="fas fa-moon"></i>
            </span>
          </nav>
        </div> {/* /.hero-head */}
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="card" style={{backgroundColor: this.state.color}}>
              <div className="card-content" className="color-box">

              </div>
              <div className="card-content" style={{fontSize: "1.8rem", fontFamily: "'Rajdhani', sans-serif", fontWeight: "700", backgroundColor: "#fff"}}>
                <div className="content is-uppercase">
                  {this.state.color}
                </div>
              </div>
              <footer className="card-footer">
                <p className="card-footer-item back-button" onClick={this.handleBack}>
                <span className="icon">
                  <i className="fas fa-chevron-left"></i>
                </span>
                </p>
                <p className="card-footer-item generate-button" onClick={this.handleGenerate}>
                  <span className="icon">
                    <i className="fas fa-sync-alt"></i>
                  </span>
                </p>
                <CopyToClipboard text={this.state.color} onCopy={() => this.setState({copied: true})}>
                  <p className="card-footer-item copy-button">
                    <span className="icon">
                      <i className="far fa-copy"></i>
                    </span>
                  </p>
                </CopyToClipboard>
              </footer>
            </div> {/* /.card */}
          </div> {/* /.container */}
        </div> {/* /.hero-body */}
      </section>
    );
  }
}

export default App;
